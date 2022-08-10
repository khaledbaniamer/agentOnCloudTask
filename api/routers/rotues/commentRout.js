const comments = require("express").Router()
const { addComment, getComment, testComment } = require("../controllers/commentController")


comments.post('/addcomment' , addComment);
comments.get('/getcomment/:item_id' , getComment)



module.exports = comments;