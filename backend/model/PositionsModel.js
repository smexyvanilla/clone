const {model}=require("mongoose");//class from mongoose

const {PositionsSchema}=require("../schemas/PositionsSchema");//req schema

const PositionsModel=new model("position",PositionsSchema);//name jiska plural db ka collection banega --collection name holdings hoga

module.exports={PositionsModel};