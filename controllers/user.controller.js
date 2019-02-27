const User = require('../models/user.model');
exports.user_create = (req, res) => {
    try{

        let user = new User({
            name: req.body.name,
            email: req.body.email
        });
        user.save();
        res.status(201).json({
            message: 'User account created succesfully'
        });
            
    } catch(error){
        res.status(500).json({
            error: {
                message: error
            }

        })
    }
    }