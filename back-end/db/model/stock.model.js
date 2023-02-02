const mongoose=require("mongoose");
const StockSchema=new mongoose.Schema({
    name:String,
    amount:Number
})
module.exports =mongoose.model("Stock",StockSchema)