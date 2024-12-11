const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Bestiary model
const Bestiary = mongoose.models.Bestiary || mongoose.model('Bestiary', new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    habitat: { type: String, required: true },
    strength: { type: Number, required: true },
    weaknesses: { type: [String], required: true },
    isLegendary: { type: Boolean, default: false },
}), 'bestiary');

// Create a new monster
router.post('/', async (req, res) => {
    try {
        const newMonster = new Bestiary(req.body);
        await newMonster.save();
        res.status(201).json(newMonster);
    } catch (error) {
        console.error("Error creating monster:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Get all monsters
router.get('/', async (req, res) => {
    try {
        const monsters = await Bestiary.find();
        res.json(monsters);
    } catch (error) {
        console.error("Error retrieving monsters:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Get a specific monster by ID
router.get('/:id', async (req, res) => {
    try {
        const monster = await Bestiary.findById(req.params.id);
        if (!monster) {
            return res.status(404).json({ error: 'Monster not found' });
        }
        res.json(monster);
    } catch (error) {
        console.error("Error retrieving monster:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Update a monster by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedMonster = await Bestiary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMonster) {
            return res.status(404).json({ error: 'Monster not found' });
        }
        res.json(updatedMonster);
    } catch (error) {
        console.error("Error updating monster:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Delete a monster by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedMonster = await Bestiary.findByIdAndDelete(req.params.id);
        if (!deletedMonster) {
            return res.status(404).json({ error: 'Monster not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error("Error deleting monster:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

module.exports = router;
