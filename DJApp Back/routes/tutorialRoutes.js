const express = require('express');
const mongoose = require('mongoose');
const Tutorial = mongoose.models.tutorials || mongoose.model('tutorials', new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    videoLink: { type: String, required: true },
}), 'tutorials');  // Define or get the Tutorial model

const router = express.Router();

// GET all tutorials
router.get('/', async (req, res) => {
    try {
        const tutorials = await Tutorial.find();
        res.json(tutorials);
    } catch (error) {
        console.error('Error fetching tutorials:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a tutorial by ID
router.get('/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findById(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.json(tutorial);
    } catch (error) {
        console.error('Error fetching tutorial by ID:', error);
        res.status(400).json({ error: 'Invalid ID format' });
    }
});

// POST a new tutorial
router.post('/', async (req, res) => {
    try {
        const { name, author, description, videoLink } = req.body;
        const newTutorial = new Tutorial({ name, author, description, videoLink });
        await newTutorial.save();
        res.status(201).json(newTutorial);
    } catch (error) {
        console.error('Error creating tutorial:', error);
        res.status(400).json({ error: 'Bad Request' });
    }
});

// PUT (update) a tutorial by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.json(updatedTutorial);
    } catch (error) {
        console.error('Error updating tutorial:', error);
        res.status(400).json({ error: 'Bad Request' });
    }
});

// DELETE a tutorial by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTutorial = await Tutorial.findByIdAndDelete(req.params.id);
        if (!deletedTutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting tutorial:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
