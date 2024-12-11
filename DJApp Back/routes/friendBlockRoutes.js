const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const router = express.Router();
const mongoose = require('mongoose');

// Use the User model from server.js (it's already defined and connected to mongoose)
const User = mongoose.models.User;

// Add Friend Route
router.post('/add', authenticateJWT, async (req, res) => {
    const { friendId } = req.body;
    const userId = req.user.userId;

    if (friendId === userId) {
        return res.status(400).json({ message: "You cannot add yourself as a friend." });
    }

    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!friend) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.friends.includes(friendId)) {
            return res.status(400).json({ message: "User is already your friend." });
        }

        user.friends.push(friendId);
        await user.save();
        
        res.status(200).json({ message: "Friend added successfully." });
    } catch (error) {
        console.error('Add friend error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Remove Friend Route
router.post('/remove', authenticateJWT, async (req, res) => {
    const { friendId } = req.body;
    const userId = req.user.userId;

    try {
        const user = await User.findById(userId);

        if (!user.friends.includes(friendId)) {
            return res.status(400).json({ message: "User is not your friend." });
        }

        user.friends = user.friends.filter(id => id.toString() !== friendId);
        await user.save();
        
        res.status(200).json({ message: "Friend removed successfully." });
    } catch (error) {
        console.error('Remove friend error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Block User Route
router.post('/block', authenticateJWT, async (req, res) => {
    const { userIdToBlock } = req.body;
    const userId = req.user.userId;

    if (userIdToBlock === userId) {
        return res.status(400).json({ message: "You cannot block yourself." });
    }

    try {
        const user = await User.findById(userId);
        const userToBlock = await User.findById(userIdToBlock);
        
        if (!userToBlock) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.blockedUsers.includes(userIdToBlock)) {
            return res.status(400).json({ message: "User is already blocked." });
        }

        user.blockedUsers.push(userIdToBlock);
        await user.save();
        
        res.status(200).json({ message: "User blocked successfully." });
    } catch (error) {
        console.error('Block user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Unblock User Route
router.post('/unblock', authenticateJWT, async (req, res) => {
    const { userIdToUnblock } = req.body;
    const userId = req.user.userId;

    try {
        const user = await User.findById(userId);

        if (!user.blockedUsers.includes(userIdToUnblock)) {
            return res.status(400).json({ message: "User is not blocked." });
        }

        user.blockedUsers = user.blockedUsers.filter(id => id.toString() !== userIdToUnblock);
        await user.save();
        
        res.status(200).json({ message: "User unblocked successfully." });
    } catch (error) {
        console.error('Unblock user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
