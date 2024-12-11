const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const Runebook = mongoose.models.Runebook || mongoose.model('Runebook', new mongoose.Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    description: { type: String, required: true }
}), 'runebooks');

// Create a new rune
router.post('/', async (req, res) => {
    const { name, origin, description } = req.body;
    try {
        const newRune = new Runebook({ name, origin, description });
        await newRune.save();
        res.status(201).json(newRune);
    } catch (error) {
        console.error('Error creating rune:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all runes
router.get('/', async (req, res) => {
    try {
        const runes = await Runebook.find();
        res.json(runes);
    } catch (error) {
        console.error('Error fetching runes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific rune by ID
router.get('/:id', async (req, res) => {
    try {
        const rune = await Runebook.findById(req.params.id);
        if (!rune) {
            return res.status(404).json({ error: 'Rune not found' });
        }
        res.json(rune);
    } catch (error) {
        console.error('Error fetching rune by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a rune by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedRune = await Runebook.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRune) {
            return res.status(404).json({ error: 'Rune not found' });
        }
        res.json(updatedRune);
    } catch (error) {
        console.error('Error updating rune:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a rune by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRune = await Runebook.findByIdAndDelete(req.params.id);
        if (!deletedRune) {
            return res.status(404).json({ error: 'Rune not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting rune:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
