const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// DivineBeing model
const DivineBeing = mongoose.models.DivineBeing || mongoose.model('DivineBeing', new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    history: { type: String, required: true },
    relevantRunes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Runebook' }]
}), 'divineBeings');

// Create a new Divine Being
router.post('/', async (req, res) => {
    const { name, description, history, relevantRunes } = req.body;

    try {
        const newDivineBeing = new DivineBeing({ name, description, history, relevantRunes });
        await newDivineBeing.save();
        res.status(201).json(newDivineBeing);
    } catch (error) {
        console.error("Error creating divine being:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Get all Divine Beings
router.get('/', async (req, res) => {
    try {
        const divineBeings = await DivineBeing.find().populate('relevantRunes');
        res.json(divineBeings);
    } catch (error) {
        console.error("Error retrieving divine beings:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Get a specific Divine Being by ID
router.get('/:id', async (req, res) => {
    try {
        const divineBeing = await DivineBeing.findById(req.params.id).populate('relevantRunes');
        if (!divineBeing) {
            return res.status(404).json({ error: "Divine being not found" });
        }
        res.json(divineBeing);
    } catch (error) {
        console.error("Error retrieving divine being:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Update a Divine Being by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDivineBeing = await DivineBeing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDivineBeing) {
            return res.status(404).json({ error: "Divine being not found" });
        }
        res.json(updatedDivineBeing);
    } catch (error) {
        console.error("Error updating divine being:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Delete a Divine Being by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedDivineBeing = await DivineBeing.findByIdAndDelete(req.params.id);
        if (!deletedDivineBeing) {
            return res.status(404).json({ error: "Divine being not found" });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error("Error deleting divine being:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

module.exports = router;
