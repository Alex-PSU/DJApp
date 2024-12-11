// TutorialsScreenStyles.ts
import { StyleSheet } from 'react-native';

const tutorialsScreenStyles = StyleSheet.create({
  // Base container for the Tutorials Screen
  tutorialsScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
  },

  // Background image style
  tutorialsScreenChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 412,
    height: 917,
    resizeMode: 'cover', // Equivalent to object-fit: cover
  },

  // Home Button style
  homeButtonIcon: {
    position: 'absolute',
    top: 797,
    left: 160,
    width: 82,
    height: 77,
  },

  // Arrow Left Icon style
  arrowLeftIcon: {
    position: 'absolute',
    top: 63,
    left: 2,
    width: 48,
    height: 48,
    overflow: 'hidden',
    cursor: 'pointer', // Not used in React Native, touchable events should be handled
  },

  // Title text style for 'Tutorials'
  tutorials: {
    position: 'absolute',
    height: '15.79%',
    width: '95.02%',
    top: '7.21%',
    left: '4.48%',
    fontSize: 48,
    fontFamily: 'Bungee Shade', // Custom font
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },

  // Tutorial Card container (Reusable for each tutorial)
  tutorial3Child: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3498db',
    width: 337,
    height: 92,
    opacity: 0.75,
  },

  // Text style for 'TBA' inside tutorial card
  tba: {
    position: 'absolute',
    height: '95.65%',
    width: '100%',
    top: '4.35%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Tutorial card containers
  tutorial3: {
    position: 'absolute',
    top: 603,
    left: 32,
    width: 337,
    height: 92,
  },

  tutorial2: {
    position: 'absolute',
    top: 408,
    left: 40,
    width: 337,
    height: 92,
  },

  tutorial1: {
    position: 'absolute',
    top: 201,
    left: 32,
    width: 337,
    height: 92,
  },

  // Wrapper for tutorials text
  tutorialsTxt: {
    width: '100%',
  },

  // Subheading text for tutorials
  tutorials1: {
    margin: 0,
  },
});

export default tutorialsScreenStyles;

