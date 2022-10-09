const mongoose= require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ProductSchema=new Schema({
    Code: Number,
    Name: String,
    Qty: Number,
    Price: Number,
    Status: String,
    Date_added: Date
});

//Model 
const ProductTable=mongoose.model('ProductTable', ProductSchema);

module.exports=ProductTable;