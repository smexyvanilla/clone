const {model}=require("mongoose");//class from mongoose

const {HoldingsSchema}=require("../schemas/HoldingsSchema");//req schema

const HoldingsModel=new model("holding",HoldingsSchema);//name jiska plural db ka collection banega --collection name holdings hoga

module.exports={HoldingsModel};