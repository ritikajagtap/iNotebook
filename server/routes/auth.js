const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const path = require('path')
env.config({ path: './.env' });
const fetchuser = require('../middleware/fetchuser');


// ROUTE 1: Create a user using: POST 'api/auth/createuser". No login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password should contain atleast 8 characters').isLength({ min: 8 }),
], async (req, res) => {
    // If there are errors return bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with this email exists already
    try {

        let user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).json({success, error: "Email already exists"});
        }

        // Salting password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Creating a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        // Token authentication using JWT
        const data = {
            user: {
                id: user.id,
            },
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({success, authtoken});

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Internal server error");

    }

});


// ROUTE 2: Authenticate a user using: POST 'api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank  ').exists(),
], async (req, res) => {

    // If there are errors return bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {

        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }

        // Token authentication using JWT
        const data = {
            user: {
                id: user.id,
            },
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({success, authtoken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

});


// ROUTE 3: Get logged in user details: POST 'api/auth/getuser". Login required
router.get('/getuser', fetchuser, async (req, res) => {

    try {
        
        userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

});


module.exports = router