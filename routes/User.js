// route is to join html to backend file
// working of route is in controller
const express = require('express');
const postController = require('../controller/user');
const path= require('path');
const bodyParser=require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}))
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "view", "booking.html"));
})

router.post('/user', postController.postUser);
router.get('/user', postController.getUser);
router.delete('/user/:id', postController.deleteUser);

module.exports=router;