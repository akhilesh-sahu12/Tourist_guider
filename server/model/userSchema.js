const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type:String, 
        require:true
    },
    email: {
        type:String, 
        require:true
    },
    phone: {
        type:Number, 
        require:true
    },
    password: {
        type:String, 
        require:true
    },
    cpassword: {
        type:String, 
        require:true
    },
    tokens:[
        {
            token:{
                type:String, 
                 require:true
            }
        }
    ]

})


// hashing process of password by pre method we have to method
// pre and post and pre means before and post means after  ('here 'save' is method  user.save())


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})


//generate token 

userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: token})//second tocken is just upper line tocken
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}


const User = mongoose.model('USER',userSchema)
module.exports = User

