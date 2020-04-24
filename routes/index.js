const express = require('express');
const router  = express.Router();
var userController = require('../controllers/user');

router.get('/', (req, res)=>{
    res.send("hello demo!!!")
})

router.post('/signUp', userController.signUp);
router.post('/login', userController.login);
router.post('/update', userController.update);

module.exports = router;
