// StaffScreenStyles.ts
import { StyleSheet } from 'react-native';

const staffScreenStyles = StyleSheet.create({
  // Base container for Staff Screen
  staffScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Bungee Shade', // Custom font
  },

  // Background Image style
  staffScreenChild: {
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

  // Title 'Staff' Text style
  staff: {
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

  // Alex H profile container
  alexH: {
    position: 'absolute',
    top: 201,
    left: -67,
    width: 337,
    height: 142,
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
    display: 'flex',
    alignItems: 'center',
  },

  // Profile image for Alex H
  alexHIcon: {
    position: 'absolute',
    top: 0,
    left: 102,
    width: 132,
    height: 142,
    resizeMode: 'cover', // Equivalent to object-fit: cover
  },

  // Profile clickable background overlay (semi-transparent)
  alexHChild: {
    position: 'absolute',
    top: 0,
    left: 102,
    backgroundColor: '#3498db',
    width: 132,
    height: 142,
    opacity: 0.5,
    cursor: 'pointer', // Not used in React Native, handled via touchable event
  },

  // Name text inside profile
  alexH1: {
    position: 'absolute',
    height: '61.97%',
    width: '100%',
    top: '19.01%',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default staffScreenStyles;
