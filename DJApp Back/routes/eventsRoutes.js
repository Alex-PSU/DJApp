const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Define the Event Schema (if not already defined in WebProto.js)
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema, 'events');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add a new event
router.post('/', async (req, res) => {
    const { name, description, date, location } = req.body;

    try {
        const newEvent = new Event({ name, description, date, location });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

// Update an event by ID
router.put('/:id', async (req, res) => {
    const { name, description, date, location } = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, { name, description, date, location }, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(400).json({ message: 'Bad request' });
    }
});

// Delete an event by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
