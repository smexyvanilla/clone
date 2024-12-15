const {model}=require("mongoose");//class from mongoose

const {OrdersSchema}=require("../schemas/OrdersSchema");//req schema

const OrdersModel=new model("order",OrdersSchema);//name jiska plural db ka collection banega --collection name holdings hoga

module.exports={OrdersModel};