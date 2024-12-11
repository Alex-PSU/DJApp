// EventsScreenStyles.ts
import { StyleSheet } from 'react-native';

const eventsScreenStyles = StyleSheet.create({
  // Base container for the Events Screen
  eventsScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
  },

  // Background image style
  eventsScreenChild: {
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

  // Events title style
  events: {
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

  // Event card background style
  event3Child: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3498db',
    width: 337,
    height: 92,
    opacity: 0.75,
  },

  // Text inside event card
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

  // Event container styles
  event3: {
    position: 'absolute',
    top: 603,
    left: 32,
    width: 337,
    height: 92,
  },

  event2: {
    position: 'absolute',
    top: 408,
    left: 40,
    width: 337,
    height: 92,
  },

  event1: {
    position: 'absolute',
    top: 201,
    left: 32,
    width: 337,
    height: 92,
  },
});

export default eventsScreenStyles;
