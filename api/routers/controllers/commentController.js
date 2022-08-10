const {Comment} =require('../../models');
const {User} =require('../../models');
const express = require('express')
const app = express();

app.use(express.json())

const addComment = async(req ,res)=>{
     
     const data = {comment_body:req.body.comment ,user_id:req.body.user_id , item_id:req.body.item_id}
    
     try {
         const addComment = await Comment.create(data)
         
         const singleItemComment = await Comment.findOne({
            where:{id:addComment.id},
            // attributes: ['id', 'firstName'],
            include:[{model:User , attributes:  ["firstName", "lastName"] }]
            // include:User
         })
        //  console.log(singleItemComment.User)
         res.send(singleItemComment)
     } catch (error) {
         
     }
}

const getComment = async(req ,res)=>{
    const {item_id} = req.params;
    // console.log(User)
    try {
     const singleItemComment = await Comment.findAll({
        where:{item_id:item_id},
        // attributes: ['id', 'firstName'],
        include:[{model:User , attributes:  ["firstName", "lastName"] }]
        // include:User
     });
    //  const results = await Comment.query(
    //     `SELECT comments.comment_body , comments.item_id , users.firstName  FROM comments JOIN users ON comments.user_id = users.id where comments.item_id = ${item_id}`
    //   );
    // console.log(JSON.stringify(singleItemComment, null, 2));

     res.send(singleItemComment);
    } catch (error) {
    }   
}


module.exports = {
    addComment,
    getComment,
    
}