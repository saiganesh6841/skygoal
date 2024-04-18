

const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      fullname: {
        type: String,
        required: true,
      },
      gender:{
        type: String,
        enum: ['male', 'female','other'],
        required:true
      }
})

const User= mongoose.model('users', userSchema);

module.exports = User;