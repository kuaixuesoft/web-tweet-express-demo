const express = require('express');
const router = express.Router();

const User = require('../models/users');
const utils = require('../utils');

router.get('/', utils.requireLogin, (req, res) => {
  res.render('profile');
});

router.get('/edit', utils.requireLogin, (req, res) => {
  res.render('editProfile');
});

// edit user profile
router.post('/edit', utils.requireLogin, (req, res) => {
    User.update({_id: req.user._id}, req.body, (err)=>{
        if(err){
            return next(err);
        }else{
            return res.redirect('/profile')
        }
    });
});

// update user avatar
router.post('/avatar', utils.requireLogin, (req,res)=>{
    User.update({_id: req.user._id}, req.body, (err)=>{
        if(err){
            return next(err);
        }else{
            return res.json({sucess: true})
        }
    });
})

module.exports = router;