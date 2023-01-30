const mongoose=require("mongoose");

const HospitalSchema=new mongoose.Schema({
    name:String,
    country:String,
    city:String,
    invoice:String,
    users:Array,
    orders:Array
})





module.exports =mongoose.model("Hospitals",HospitalSchema)
