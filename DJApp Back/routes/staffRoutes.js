const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Define the Staff Schema (if you don't have it already in WebProto.js)
const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateAdded: { type: Date, default: Date.now },
});

const Staff = mongoose.models.Staff || mongoose.model('Staff', staffSchema, 'staff');

// Get all staff
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (error) {
        console.error('Error fetching staff:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add a new staff member
router.post('/', async (req, res) => {
    const { name, role, email } = req.body;

    try {
        const newStaff = new Staff({ name, role, email });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        console.error('Error creating staff:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

// Update a staff member by ID
router.put('/:id', async (req, res) => {
    const { name, role, email } = req.body;

    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, { name, role, email }, { new: true });
        if (!updatedStaff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.json(updatedStaff);
    } catch (error) {
        console.error('Error updating staff:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

// Delete a staff member by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting staff:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
