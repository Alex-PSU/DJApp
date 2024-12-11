// GachaScreenStyles.ts
import { StyleSheet } from 'react-native';

const gachaScreenStyles = StyleSheet.create({
  // Base container for the Gacha Screen
  gachaScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 24,
    color: '#f9c74f',
    fontFamily: 'Bungee', // Custom font
  },

  // Background image style
  gachaScreenChild: {
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

  // Gacha title style
  gacha: {
    position: 'absolute',
    height: '15.79%',
    width: '95.02%',
    top: '4.81%',
    left: '2.49%',
    fontSize: 48,
    fontFamily: 'Bungee Shade', // Custom font
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Banner background style
  banner1Child: {
    position: 'absolute',
    top: 0,
    left: 122,
    backgroundColor: '#3498db',
    width: 302,
    height: 177,
  },

  // Banner text style
  avalonsDracofest: {
    position: 'absolute',
    height: '50%',
    width: '69.2%',
    top: 0,
    left: '14.86%',
    fontSize: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Pull option style
  pull: {
    position: 'absolute',
    height: '50%',
    width: '69.2%',
    top: '50%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Pull 10 option style
  pull1: {
    position: 'absolute',
    height: '50%',
    width: '69.2%',
    top: '50%',
    left: '30.8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Banner container styles
  banner1: {
    position: 'absolute',
    top: 180,
    left: -75,
    width: 552,
    height: 276,
  },

  banner2Child: {
    position: 'absolute',
    top: 0,
    left: 122,
    backgroundColor: '#3498db',
    width: 302,
    height: 177,
    cursor: 'pointer',
  },

  // Second banner container
  banner2: {
    position: 'absolute',
    top: 489,
    left: -75,
    width: 552,
    height: 276,
  },
});

export default gachaScreenStyles;
