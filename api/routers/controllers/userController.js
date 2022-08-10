
// const { sequelize } = require("../../models/index");
const {User} = require('../../models');
const {Item} = require('../../models');

const getUser = async (req, res) => {
    
    try {
     const users = await User.findOne({
        where:{isLogin:1}
     });
     res.send({user_id:users.id , name:users.firstName , isLogin: users.isLogin});
    } catch (error) {
    }   
}
const addUser = async (req, res) => {
    // console.log(req)
    const data = {firstName:req.body.fname , lastName:req.body.lname ,email:req.body.email , password:req.body.password , isLogin:0}
    
    try {
     const users = await User.create(data);
     res.send(users);
    } catch (error) {
        res.status(412).send(error)
    }   
}
const login = async (req, res) => {
    // console.log(req.body.email)
    try {
     const user = await User.findOne({
        where:{email:req.body.email}
     });
     if(user !=null){
        if(user.password == req.body.password){
            user.isLogin = 1;
           await user.save()
        }
     }
     const userupdate = await User.findOne({
        where:{email:req.body.email}
     });
     console.log(userupdate)
     res.send({user_id:userupdate.id ,name:userupdate.firstName, isLogin:userupdate.isLogin});
    } catch (error) {
    }   
}

const getUserItems = async (req ,res)=>{
    const {user_id} = req.params
    try {
        const userItems = await Item.findAll({
            where:{user_id :user_id}
        }) 
        res.send(userItems)
    } catch (error) {
        
    }
}

const logout = async (req ,res)=>{
    const {user_id} = req.params;
    try {
        const user = await User.findOne({
        where:{id:user_id},
        })
        user.isLogin = 0;
        await user.save();
        const updateUser = await User.findOne(
            {where:{id:user_id}})
        res.send(updateUser)
    } catch (error) {
        
    }
}

module.exports = {
    getUser,
    addUser,
    login,
    logout,
    getUserItems,
}