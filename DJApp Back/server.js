const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // For parsing application/json

// Import routes
const authRoutes = require('./routes/authRoutes');
const bestiaryRoutes = require('./routes/bestiaryRoutes');
const characterRoutes = require('./routes/characterRoutes');
const divineWheelRoutes = require('./routes/divineWheelRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const forumRoutes = require('./routes/forumRoutes');
const friendBlockRoutes = require('./routes/friendBlockRoutes');
const gachaBannerRoutes = require('./routes/gachaBannerRoutes');
const gachaPullRoutes = require('./routes/gachaPullRoutes');
const profileRoutes = require('./routes/profileRoutes');
const runebookRoutes = require('./routes/runebookRoutes');
const spellRoutes = require('./routes/spellRoutes');
const staffRoutes = require('./routes/staffRoutes');
const storyRoutes = require('./routes/storyRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

// Route handling
app.use('/api/auth', authRoutes);
app.use('/api/bestiary', bestiaryRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/divineBeings', divineWheelRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/friendBlock', friendBlockRoutes);
app.use('/api/gachaBanner', gachaBannerRoutes);
app.use('/api/gachaPull', gachaPullRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/runebook', runebookRoutes);
app.use('/api/spell', spellRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/story', storyRoutes);
app.use('/api/tutorial', tutorialRoutes);

// MongoDB connection string directly
mongoose.connect('mongodb+srv://Monkeechief:QRidCTibwCZ2x2IP@clusterproto.u9ass.mongodb.net/yourdb?retryWrites=true&w=majority&appName=ClusterProto', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
