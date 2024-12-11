// DracofestScreenStyles.ts
import { StyleSheet } from 'react-native';

const dracofestScreenStyles = StyleSheet.create({
  // Base container for the Dracofest Screen
  dracofestScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Bungee Shade', // Custom font
  },

  // Background image style
  dracofestScreenChild: {
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

  // Avalon’s Dracofest title style
  avalonsDracofest: {
    position: 'absolute',
    height: '15.79%',
    width: '95.02%',
    top: '6.18%',
    left: '2.99%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Character preview background box style
  characterPreviewChild: {
    position: 'absolute',
    top: 286,
    left: 72,
    backgroundColor: '#000',
    width: 178,
    height: 183,
  },

  // Character image style
  purpleD201Icon: {
    position: 'absolute',
    top: 310,
    left: 92,
    width: 138,
    height: 136,
    resizeMode: 'cover', // Equivalent to object-fit: cover
  },

  // Outer box of the character preview
  characterPreviewItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    width: 315,
    height: 295,
  },

  // Character preview container style
  characterPreview: {
    position: 'absolute',
    top: 220,
    left: 43,
    width: 315,
    height: 469,
  },
});

export default dracofestScreenStyles;
