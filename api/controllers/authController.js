import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"

export const signUp=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const hashedPassword=bcryptjs.hashSync(password,10)
        const newUser=new User({username,email,password:hashedPassword})
    await newUser.save();
    res.status(201).json({message:"User created successfully"})
    } catch (error) {
        res.json(error.message)
    }
    
}