const mongoose=require('mongoose');
const express=require('express');
const bookSchema=require('./model');
const route=express.Router();

route.post('/add',(req,res)=>{
    const model=new bookSchema(req.body);
    model.save()
        .then(()=>{
            console.log('added 1 book');
            res.send('Successfully added 1 book');
        })
        .catch((err)=>{
            console.log(err);
            res.json(err);
        });
            
});

route.post('/get',(req,res)=>{
    bookSchema.find(
    {
        name:req.body.name
    })
    .then((doc)=>res.json(doc))
    .catch((err)=>res.json(err));
});

route.get('/list',(req,res)=>{
    bookSchema.find()
    .then((doc)=>res.json(doc))
    .catch((err)=>res.json(err));
});


module.exports=route;