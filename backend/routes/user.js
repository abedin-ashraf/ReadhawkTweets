const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');

const { authMiddleware } = require('../middleware/middleware.js');
const { JWT_SECRET } = require('../config.js')
const { Users } = require('../db/index.js');



///////////////////////////////          SIGN UP          /////////////////////////////////////
const signupBody = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string()

})

router.post('signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(411).json({
            message: "Email is already taken"
        })
    }

    const user = await Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const userId = user._id;
    const token = jwt.sign(userId, JWT_SECRET);
    res.status(200).json({
        message: "User created successfully",
        token: "Bearer " + token
    })

})

//////////////////////////////          SIGN UP          /////////////////////////////////////


module.exports = router;