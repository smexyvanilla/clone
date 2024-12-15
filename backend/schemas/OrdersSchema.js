const {Schema}=require("mongoose");

const OrdersSchema =new Schema({
    name:String,
    qty: Number,
    price: Number,
    mode: String,
});//name of schema aconst {Schema}=require("mongoose");//class from mongooses file name

module.exports={OrdersSchema};