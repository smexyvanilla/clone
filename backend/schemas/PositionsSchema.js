const {Schema}=require("mongoose");

const PositionsSchema =new Schema({
    product:String,
    name: String,
    qty:Number ,
    avg: Number,
    price:Number,
    net: String,
    day: String,
    isLoss: Boolean,
});//name of schema aconst {Schema}=require("mongoose");//class from mongooses file name

module.exports={PositionsSchema};