const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const Spell = mongoose.models.Spell || mongoose.model('Spell', new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    runeCombination: { type: [String], required: true }  // Assuming runeCombination is an array of rune IDs
}), 'spells');

// Create a new spell
router.post('/', async (req, res) => {
    const { name, description, runeCombination } = req.body;

    // Validate input
    if (!name || !description || !Array.isArray(runeCombination) || runeCombination.length === 0) {
        return res.status(400).json({ error: "Name, description, and runeCombination are required." });
    }

    try {
        const newSpell = new Spell({ name, description, runeCombination });
        await newSpell.save();
        res.status(201).json(newSpell);
    } catch (error) {
        console.error("Error creating spell:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Read all spells
router.get('/', async (req, res) => {
    try {
        const spells = await Spell.find();
        res.json(spells);
    } catch (error) {
        console.error("Error retrieving spells:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Read a single spell by ID
router.get('/:id', async (req, res) => {
    try {
        const spell = await Spell.findById(req.params.id);
        if (!spell) {
            return res.status(404).json({ error: "Spell not found." });
        }
        res.json(spell);
    } catch (error) {
        console.error("Error retrieving spell:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Update a spell by ID
router.put('/:id', async (req, res) => {
    const { name, description, runeCombination } = req.body;

    try {
        const updatedSpell = await Spell.findByIdAndUpdate(
            req.params.id,
            { name, description, runeCombination },
            { new: true, runValidators: true }
        );

        if (!updatedSpell) {
            return res.status(404).json({ error: "Spell not found." });
        }

        res.json(updatedSpell);
    } catch (error) {
        console.error("Error updating spell:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Delete a spell by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedSpell = await Spell.findByIdAndDelete(req.params.id);
        if (!deletedSpell) {
            return res.status(404).json({ error: "Spell not found." });
        }
        res.json({ message: "Spell deleted successfully." });
    } catch (error) {
        console.error("Error deleting spell:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Combine runes and return the corresponding spell
router.post('/runes/combine', async (req, res) => {
    const { runeIds } = req.body;

    // Validate input
    if (!runeIds || !Array.isArray(runeIds) || runeIds.length !== 3) {
        return res.status(400).json({ error: "Exactly three rune IDs are required." });
    }

    try {
        // Check if the combination exists in spells
        const spell = await Spell.findOne({ runeCombination: { $all: runeIds } });

        if (!spell) {
            return res.status(404).json({ error: "No spell found for this combination of runes." });
        }

        // Return the spell information
        res.json(spell);
    } catch (error) {
        console.error("Error retrieving spell:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

module.exports = router;
