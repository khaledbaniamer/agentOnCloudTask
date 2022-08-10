const { addFav, getFav } = require("../controllers/FavItemController");

const favItems = require("express").Router()
// const { addComment, getComment, testComment } = require("../controllers/commentController")

favItems.post('/addfav' , addFav )
favItems.get('/getfav/:user_id' , getFav )




module.exports = favItems;