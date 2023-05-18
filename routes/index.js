import mongoose from "mongoose";
import express from "express";
import  User from "../models/User.js";

const router = express.Router();

router.get(('/rest_api/users'), (req,res) => {
    User.find({}).then(item => res.send(item))
});
router.post(('/rest_api/users/add'),(req,res) => {
    const user = new User({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        email : req.body.email,
        age : req.body.age                    
    })
    user.save()
});
router.put(('/rest_api/users/edit/:id'),async (req,res,next) => {
    const user = {
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        email : req.body.email,
        age : req.body.age
    }
    const nn = await User.findOneAndUpdate({_id : req.params.id},{ $set : user})
    await nn.save();
    next();
}); 
router.delete(('/rest_api/users/delete/:id'),async (req,res,next) => {
    const nnn = await User.findOneAndDelete({_id : req.params.id})
    await nnn.save();
    next();
})


export default router;