const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Story Schema (Defined directly in the server.js)
const storySchema = new mongoose.Schema({
    title: String,
    content: String,
    gachaBannerId: String
});
const Story = mongoose.models.stories || mongoose.model('stories', storySchema, 'stories');

// Get All Stories
router.get('/', async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (error) {
        console.error('Error fetching stories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create New Story
router.post('/', async (req, res) => {
    try {
        const newStory = new Story(req.body);
        await newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        console.error('Error saving story:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update Story
router.put('/:id', async (req, res) => {
    try {
        const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.json(updatedStory);
    } catch (error) {
        console.error('Error updating story:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete Story
router.delete('/:id', async (req, res) => {
    try {
        const deletedStory = await Story.findByIdAndDelete(req.params.id);
        if (!deletedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting story:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
