const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Character Schema 
const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    attributes: { type: Object, required: true }
  });
  const Character = mongoose.models.characters || mongoose.model('characters', characterSchema, 'characters');

// Get all Characters
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new Character
router.post('/', async (req, res) => {
    const newCharacter = new Character(req.body);
    try {
        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error) {
        console.error('Error creating character:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update an existing Character
router.put('/:id', async (req, res) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCharacter) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.json(updatedCharacter);
    } catch (error) {
        console.error('Error updating character:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a Character
router.delete('/:id', async (req, res) => {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        if (!deletedCharacter) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting character:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
