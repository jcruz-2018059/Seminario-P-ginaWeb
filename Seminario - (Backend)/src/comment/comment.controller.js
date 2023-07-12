'use strict'

const Comment = require('./comment.model')
const { validateData } = require('../services/jwt');
const moment = require('moment');

exports.addComment = async(req, res) =>{
    try {
        let params = {
            title: req.body.title,
            text: req.body.text,
            date: moment(Date.now()).format('LLL')
        };
        let newCommnet = new Comment(params);
        await newCommnet.save()
        return res.status(200).send({message:'Comment succesfully added'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message:'Error saving a comment'})
    }
}

exports.getAllComments = async(req, res)=>{
    try{
        let comments = await Comment.find();
        return res.send({comments});
    }catch(err){
        console.error(err); 
        return res.status(500).send({message: 'Error getting Comments'})
    }
}

exports.serchComments = async(req, res)=>{
    try{
        const data = req.body
        let comments = await Comment.find({
            //validar busqueda por titulo y por texto
            $or: [ 
                { 
                    title: {
                        $regex: data.name,
                        $options: 'i'
                    }
                }, { 
                    text: {
                        $regex: data.name,
                        $options: 'i'
                    }
                } ] 
        });
        return res.send({comments});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting Comments'})
    }
}

exports.deleteComment = async(req, res)=>{
    try{
        let deleteComment = await Comment.findOneAndDelete({_id: req.params.id});
        if(!deleteComment) return res.status(404).send({message: 'Comment not found and not deleted'});
        return res.send({message: 'Comment deleted sucessfully', deleteComment})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error removing Comment'})
    }
}