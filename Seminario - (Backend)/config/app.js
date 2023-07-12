'use strict'

'use strict'

const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3300;

//llamada a las rutas y controlador de usuario
const userController = require('../src/user/user.controller');
const userRoutes = require('../src/user/user.routes');
const commentRoutes = require('../src/comment/comment.routes');


app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/user', userRoutes)
app.use('/comment', commentRoutes)

const funtionsDefault = async(req, res)=>{
    try {
        await userController.createAdminDefault();
    } catch (err) {
        console.log(err);
    }
}


exports.initServer = ()=>{
    app.listen(port);
    funtionsDefault();
    console.log(`Server http running in port ${port}`);
}