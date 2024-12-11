// StoriesScreenStyles.ts
import { StyleSheet } from 'react-native';

const storiesScreenStyles = StyleSheet.create({
  // Base container for the Stories Screen
  storiesScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
  },

  // Background image style
  storiesScreenChild: {
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

  // Title text style for 'Stories'
  stories: {
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
    justifyContent: 'center',
  },

  // Story Card container (Reusable for each story)
  story3Child: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3498db',
    width: 337,
    height: 92,
    opacity: 0.75,
  },

  // Text style for 'TBA' inside story card
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

  // Story card containers
  story3: {
    position: 'absolute',
    top: 603,
    left: 32,
    width: 337,
    height: 92,
  },

  story2: {
    position: 'absolute',
    top: 408,
    left: 40,
    width: 337,
    height: 92,
  },

  story1: {
    position: 'absolute',
    top: 201,
    left: 32,
    width: 337,
    height: 92,
  },
});

export default storiesScreenStyles;
