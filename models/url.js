const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  shortId:{
    type:String,
    required:true,
    unique:true,
  },
  redirectedURL:{
    type:String,
    required:true,
  },
  visitedHistory:[{timestamp:{type:number}}],

},
  {timestamps:true},
);

const URL = mongoose.model("url",userSchema);
exports.module = URL;