'use strict'

const User = require('./user.model');
const { createToken, encrypt, validateData } = require('../services/jwt');
const { compare } = require('bcrypt');


exports.createAdminDefault = async (req, res) => {
  try {
    let adminDefault = {
      username: 'ADMINRAFAEL',
      password: 'ADMINRAFAEL',
      role: 'ADMIN'
    }
    adminDefault.password = await encrypt(adminDefault.password);
    let newAdmin = new User(adminDefault)
    await newAdmin.save()
    return console.log('Admin default was created')
  } catch (err) {
    if(err.code === 11000) return console.log('User default already exists')
    return console.log('Error creating user default');
  }
}


exports.login = async(req, res) => {
  try{
    let data = req.body
    let user = await User.findOne({ email: data.email })
    const message = validateData({password: data.password});
    if(message) return res.status(400).send({message});
    if (user && await compare(data.password, user.password)) {
      let token = await createToken(user)
      return res.send({ message: 'User logged successfully', token, user});
    }
    return res.status(404).send({ message: 'Invalid credentials' });
  } catch (err) {
    console.error(err);
    return res.status(500).send({message: 'Error in the login'})
  }
}


exports.updatePassword = async (req, res) => {
  try {
    let userId = req.params.id
    let me = req.user
    // Verficiar que exista
    let user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).send({ message: 'Account not found' });
    // Validar que vengan los dato
    let data = {
      before: req.body.before,
      after: req.body.after
    }
    let msg = validateData(data)
    if (msg) return res.status(400).send({ msg });
    // Validar que no sea la misma
    if(await compare(data.after, user.password))
      return res.status(401).send({ message: `Password can't be same` });
    // Validar que coincidad
    if(!(await compare(data.before, user.password)))return res.status(401).send({ message: 'Invalid Password' });
    // Encriptar contrasena
    data.after = await encrypt(data.after);
    // Actualizar contrase;a
    await user.updateOne({password: data.after});
    return res.send({message: 'Password was updated successfully'});
  } catch (err) {
    console.error(err);
    return res.status(500).send({message:'Error updating password'})
  }
}



