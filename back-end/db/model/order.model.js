const mongoose=require("mongoose");
const OrdersSchema=new mongoose.Schema({
    name:String,
    amount:Number,
    description:String
})
module.exports =mongoose.model("Orders",OrdersSchema)