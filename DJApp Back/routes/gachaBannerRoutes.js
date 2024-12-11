const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Retrieve the GachaBanner model from mongoose.models or create it if it doesn't exist
const GachaBanner = mongoose.models.GachaBanner || mongoose.model('GachaBanner', new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    characters: [{ type: String, required: true }] // Array of character names or references
}), 'gachaBanners');

// Get all Gacha Banners
router.get('/', async (req, res) => {
    try {
        const gachaBanners = await GachaBanner.find();
        res.json(gachaBanners);
    } catch (error) {
        console.error('Error fetching gacha banners:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new Gacha Banner
router.post('/', async (req, res) => {
    const newBanner = new GachaBanner(req.body);
    try {
        await newBanner.save();
        res.status(201).json(newBanner);
    } catch (error) {
        console.error('Error creating gacha banner:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update an existing Gacha Banner
router.put('/:id', async (req, res) => {
    try {
        const updatedBanner = await GachaBanner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBanner) {
            return res.status(404).json({ error: 'Banner not found' });
        }
        res.json(updatedBanner);
    } catch (error) {
        console.error('Error updating gacha banner:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a Gacha Banner
router.delete('/:id', async (req, res) => {
    try {
        const deletedBanner = await GachaBanner.findByIdAndDelete(req.params.id);
        if (!deletedBanner) {
            return res.status(404).json({ error: 'Banner not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting gacha banner:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
