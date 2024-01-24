const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.body.authorization;

    if (!authHeader || authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "Invalid Token"
        })
    }
    const token = authHeader.spilt(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        return res.status(403).json({
            message: "Error in token"
        })
    }
}

module.exports = {
    authMiddleware
}