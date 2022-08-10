const {Item} = require('../../models');
const express = require("express");
const app = express();

app.use(express.json())
const getItems = async (req, res) => {
    
    try {
     const items = await Item.findAll({});
     res.send(items);
    } catch (error) {
        res.send(error)
    }   
}
const getSinglItem = async (req, res) => {
    const {item_id} = req.params;
    try {
     const singleItem = await Item.findAll({
        where:{id:item_id}
     });
     res.send(singleItem);
    } catch (error) {
    }   
}

const addItem = async (req , res)=>{
    // console.log(req.query)
    const data = {Item_name:req.body.name ,Item_description:req.body.description , user_id:req.body.user_id}
    // console.log(data)
    try {
        const addItem = await Item.create(data)
        res.send(addItem)
    } catch (error) {
        
    }
}
const updateItem = async (req , res)=>{
    // console.log(req.query)
    const {item_id} = req.params;
    // const data = {Item_name:req.query.name ,Item_description:req.query.description , user_id:req.query.user_id}

    // console.log(data)
    try {
        const singleItem =await Item.findOne({where:{id:item_id}})
        // console.log(singleItem)
        singleItem.Item_name = req.body.Item_name;
        singleItem.Item_description = req.body.Item_description;
        singleItem.user_id  = req.body.user_id;
        await singleItem.save();
        res.send(singleItem)
    } catch (error) {
        
    }
}
const deleteItem = async (req , res)=>{
    // console.log(req.query)
    const {item_id} = req.params;
    // const data = {Item_name:req.query.name ,Item_description:req.query.description , user_id:req.query.user_id}

    // console.log(data)
    try {
        const singleItem =await Item.findOne({where:{id:item_id}})
        singleItem.destroy();
        res.send(singleItem)
    } catch (error) {
        
    }
}

module.exports = {
    getItems,
    getSinglItem,
    addItem,
    updateItem,
    deleteItem,
}