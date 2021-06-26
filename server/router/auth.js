
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User  = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('../DB/connection')
const india = require('../data/india')
const USA = require('../data/unitedState')
const dubai = require('../data/dubai')


router.get('/',(req, res)=>{
    res.send('welcome')
})
router.get('/india', (req, res)=>{
    res.json(india)
})
router.get('/usa', (req, res)=>{
    res.json(USA)
})
router.get('/dubai', (req, res)=>{
    res.json(dubai)
})



// resister route

router.post('/register',async(req, res)=>{
    console.log(req.body)
    const {name, email, phone, password, cpassword} = req.body

    try {

        if(!name || !email || !phone || !password || !cpassword){
            return res.status(422).json({error:"please fill all field"})
        }
        
        const userExist = await User.findOne({ email: email })
        if(userExist){
            return res.status(422).json({error:'user alredy exist'})
        }
    
        const user = new User({name, email, phone, password, cpassword})
    
        const response = await user.save()
        if(response){
            res.status(201).json({message:'user registered successfuly'})
        }
        
    } catch (error) {
        console.log(error)
    }
     
})


//Login route

router.post('/login', async(req, res)=>{
    console.log(req.body)

    try {
        const {email, password} = req.body 

        if(!email || !password){
            return res.status(422).json({error:'please fill all field'})
        }

        const userLogin = await  User.findOne({email: email})

        if(userLogin){

            const isMatch = await bcrypt.compare(password, userLogin.password)
            
            //user authentication using jwt token 
            const token = await userLogin.generateAuthToken()
            // save token in cookies  
            res.cookie("jwtoken", token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if (isMatch){
                res.json('user login successfully ')
            }else{
                res.status(400).json({message:'invalide credential'})
            }
        }else{
            res.status(400).json({message:'invalide credential'})
        }
        
        
        
    } catch (error) {
        console.log(error)
    }
})


module.exports=router