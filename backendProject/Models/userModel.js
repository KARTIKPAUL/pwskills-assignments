const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true,'Name must be required'],
            trim: true
        },
        email: {
            type: String,
            required: [true,'Email must be required'],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true,'Password must be required'],
            select: false
        }
    
},{timestamps: true});

userSchema.methods = {
    jwtToken(){
        return JWT.sign({
            id: this._id,
            email: this.email,
        },
        process.env.SECRET,
        {expiresIn: '24h'}
     )
    }
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password , 10);
    return next();
})


const User = mongoose.model("User", userSchema);
module.exports = User;