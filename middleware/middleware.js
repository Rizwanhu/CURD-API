import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Auth Middleware
const auth = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.header('Authorization')) {
            throw new Error('No authorization token provided');
        }

        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ 
            error: 'Authentication failed', 
            message: err.message 
        });
    }
};

export default auth;
  