const users = require("express").Router()
const {getUser, addUser, login, logout, getUserItems} = require('../controllers/userController');

users.get('/users' , getUser);
users.post('/addUser' , addUser);
users.post('/login' , login)
users.get('/logout/:user_id' , logout)
users.get('/useritems/:user_id' , getUserItems)


module.exports = users;