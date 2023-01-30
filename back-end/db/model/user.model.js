const mongoose=require("mongoose");
const UsersSchema=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    admin:Boolean,
    hospitals:Array
})

module.exports =mongoose.model("Users",UsersSchema)