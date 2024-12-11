// DivineScreenStyles.ts
import { StyleSheet } from 'react-native';

const divineScreenStyles = StyleSheet.create({
  // Base container for the Divine Screen
  divineScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
  },

  // Background image style
  divineScreenChild: {
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
  },

  // Divine title style
  divine: {
    position: 'absolute',
    height: '15.79%',
    width: '95.02%',
    top: '7.21%',
    left: 0,
    fontSize: 48,
    fontFamily: 'Bungee Shade', // Custom font
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Styles for the "divine" children (colored background)
  divine3Child: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3498db',
    width: 337,
    height: 92,
    opacity: 0.75,
  },

  // TBA (Text) style
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

  // TBA1 (Text) style
  tba1: {
    position: 'absolute',
    height: '95.65%',
    width: '97.68%',
    top: '4.35%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Divine containers (each with different top positions)
  divine3: {
    position: 'absolute',
    top: 603,
    left: 32,
    width: 337,
    height: 92,
  },
  
  divine2: {
    position: 'absolute',
    top: 408,
    left: 32,
    width: 345,
    height: 92,
  },

  divine1: {
    position: 'absolute',
    top: 201,
    left: 32,
    width: 337,
    height: 92,
  },
});

export default divineScreenStyles;
