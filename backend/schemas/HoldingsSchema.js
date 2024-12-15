const {Schema}=require("mongoose");

const HoldingsSchema =new Schema({
    name:String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,
});//name of schema aconst {Schema}=require("mongoose");//class from mongooses file name

module.exports={HoldingsSchema};