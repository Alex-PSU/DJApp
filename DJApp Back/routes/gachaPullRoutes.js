const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const GachaBanner = mongoose.models.GachaBanner || mongoose.model('GachaBanner', new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character', required: true }]
}), 'gachaBanners');

const Character = mongoose.models.Character || mongoose.model('Character', new mongoose.Schema({
    name: { type: String, required: true },
    attributes: { type: Object, required: true }
}), 'characters');

// Single Gacha Pull
router.post('/single', async (req, res) => {
    const { bannerId } = req.body;

    if (!bannerId) {
        return res.status(400).json({ error: "bannerId is required." });
    }

    try {
        const banner = await GachaBanner.findById(bannerId);

        if (!banner) {
            return res.status(404).json({ error: "Banner not found" });
        }

        const availableCharacters = await Character.find({ _id: { $in: banner.characters } });
        const randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];

        return res.json({ characters: [randomCharacter], pullType: 'single' });
    } catch (error) {
        console.error('Error pulling from Gacha banner:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 10-Pull Gacha
router.post('/10', async (req, res) => {
    const { bannerId } = req.body;

    if (!bannerId) {
        return res.status(400).json({ error: "bannerId is required." });
    }

    try {
        const banner = await GachaBanner.findById(bannerId);

        if (!banner) {
            return res.status(404).json({ error: "Banner not found" });
        }

        const availableCharacters = await Character.find({ _id: { $in: banner.characters } });

        // Ensure we have characters to pull from
        if (availableCharacters.length === 0) {
            return res.status(400).json({ error: "No characters available in the banner." });
        }

        const selectedCharacters = [];
        for (let i = 0; i < 10; i++) {
            const randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
            selectedCharacters.push(randomCharacter);
        }

        return res.json({ characters: selectedCharacters, pullType: '10-pull' });
    } catch (error) {
        console.error('Error pulling from Gacha banner:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
