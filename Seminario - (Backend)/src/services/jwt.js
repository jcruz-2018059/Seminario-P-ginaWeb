'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

exports.createToken = async(user)=>{
    try {
        let payload = {
            sub: user._id,
            username: user.username,
            password: user.password,
            role: user.rol,
            iat: Math.floor(Date.now()/ 1000), 
            exp: Math.floor(Date.now()/ 1000) + (60 * 120)  
            }
            return jwt.sign(payload, `${process.env.SECRET_KEY}`);
    } catch (err) {
        console.error(err);
    }
}

exports.encrypt = async(password)=>{
    try {
        return bcrypt.hashSync(password, 10)
    } catch (err) {
        console.log(err);
    }
}

//Función middleware (Barrera lógica)
exports.ensureAuth = (req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(403).send({message: `Doesn´t contain headers "AUTHORIZATION"`});
    }else{
        try{
            //obtener el token
            let token = req.headers.authorization.replace(/['"]+/g, '');
            //decodificar el token
            var payload = jwt.decode(token, `${process.env.SECRET_KEY}`);
            //validar que no haya expirado
            if(Math.floor(Date.now()/ 1000) >= payload.exp){
                return res.status(401).send({message: 'Expired token'});
            }
        }catch(err){
            console.error(err);
            return res.status(400).send({message: 'Invalid token'});
        }
        req.user = payload;
        next();
    }
}

exports.compare = async(pass, hash)=>{
    try {
        return bcrypt.compareSync(pass, hash)
    } catch (err) {
        console.log(err);
    }
}

exports.validateData = (data) =>{
    let keys = Object.keys(data), msg = ''
    for(let key of keys){
        if(data[key] !== null && data[key] !== undefined && data[key]!== '') continue
        msg += `the params ${key} is required \n`
    }
    return msg;
}