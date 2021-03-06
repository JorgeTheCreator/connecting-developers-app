const mongoose = require('mongoose');
  var Schema = mongoose.Schema;

// create Schema
  var userSchema = new Schema({

    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    avatar:{
      type:String
    },
    date: {
      type: Date,
      default: () => Date.now() 
    }

  });


  const User = mongoose.model('users',userSchema);

  module.exports = User;
