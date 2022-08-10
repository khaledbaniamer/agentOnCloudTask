const items = require("express").Router()
const {getItems, addItem, updateItem, deleteItem} = require('../controllers/itemController');
const {getSinglItem} = require('../controllers/itemController');

items.get('/item' , getItems);
items.get('/item/:item_id' , getSinglItem);
items.post('/addItem' , addItem);
items.post('/updateItem/:item_id' , updateItem);
items.post('/deleteItem/:item_id' , deleteItem);


module.exports = items;
