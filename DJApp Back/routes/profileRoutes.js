const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const mongoose = require('mongoose');
const router = express.Router();

// Define the User model here directly (since models are in server.js)

// User Schema (replicating what's in server.js for context)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    aboutMe: { type: String, default: '' },
    signature: { type: String, default: '' },
    dateMade: { type: Date, default: Date.now },
});

// Create User model (as defined in server.js)
const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');

// Get User Profile
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update User Profile
router.put('/:userId', authenticateJWT, async (req, res) => {
    const { userId } = req.params;
    const { aboutMe, signature } = req.body;

    if (userId !== req.user.userId) {
        return res.status(403).json({ message: 'You can only update your own profile' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { aboutMe, signature }, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
