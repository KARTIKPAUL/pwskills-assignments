const express = require('express');
const emailValidator = require('email-validator');
const User = require('../Models/userModel.js')
const bcrypt = require('bcrypt');

//SignUp

const signup = async(req,res) => {
    const {name,email,password} = req.body;

    //Validation

    if(!email || !name || !password){
        return res.status(400).json({
            success: false,
            message: 'All The Field are required'
        })
    }

    const validateEmail = emailValidator.validate(email);
    if(!validateEmail){
        return res.status(400).json({
            success: false,
            message: 'Email Id is Not Valid'
        })
    }

    try {
        
        const userInfo = User(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            data: `Account Creation Success ! ${result}`
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error ! When Creation Account ${error}`
        })
    }

}


//Login
const login = async(req,res) =>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'All The Field are required'
        })
    }

    const validateEmail = emailValidator.validate(email);
    if(!validateEmail){
        return res.status(400).json({
            success: false,
            message: 'Email Id is Not Valid'
        })
    }

    try {

        const user = await User.findOne({email}).select('+password');

        if(!user || !(await bcrypt.compare(password , user.password))){
            return res.status(400).json({
                success: false,
                message: 'Invalid Crediantials !'
            })
        }
        return res.status(200).json({
            success: true,
            data: `Login Successfull ! ${user}`
        })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'User Not Registered'
        })
    }
}

module.exports = {
    signup,
    login
}