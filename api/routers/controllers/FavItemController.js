const express = require('express');
const {FavItem} =require('../../models');
const {Item} = require('../../models');
const app = express();

app.use(express.json())


const addFav = async(req , res)=>{
    console.log(req.body)
    const data = {user_id : req.body.user_id , item_id:req.body.item_id}
    try {
        const addFav = await FavItem.create(data)
        res.send(addFav);
    } catch (error) {
        
    }
}

const getFav = async(req ,res)=>{
    const {user_id} = req.params;
    try{
        const getFavForUser = await FavItem.findAll({
            where : {user_id:user_id},
            include:[{
                model:Item, attributes:["Item_name", "Item_description"]
            }]
        })
        
        res.send(getFavForUser)
    } catch (error) {
        
    }
}




module.exports = {
    addFav,
    getFav,
    
}




