// AlexAccountScreenStyles.ts
import { StyleSheet } from 'react-native';

const alexAccountScreenStyles = StyleSheet.create({
  // Base container for the Alex Account Screen
  alexAccountScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    fontFamily: 'Bungee', // Custom font
  },

  // Background Image style
  alexAccountScreenChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 412,
    height: 917,
    resizeMode: 'cover', // Equivalent to object-fit: cover
  },

  // Alex H title text style
  alexH: {
    position: 'absolute',
    height: '15.79%',
    width: '91.04%',
    top: '1.72%',
    left: '3.98%',
    fontSize: 48,
    fontFamily: 'Bungee Shade', // Custom font
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Home Button style
  homeButtonIcon: {
    position: 'absolute',
    top: 797,
    left: 160,
    width: 82,
    height: 77,
  },

  // Trending Posts Container
  trendingPosts: {
    position: 'absolute',
    top: 330,
    left: 16,
    width: 356,
    height: 146,
  },

  // Trending Posts background
  trendingPosts1: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f9c74f',
    width: 356,
    height: 146,
    opacity: 0.7,
  },

  // Container for trending posts content
  trendingPosts1120ChristmasContainer: {
    position: 'absolute',
    height: '38.36%',
    width: '94.1%',
    top: '34.93%',
    left: '3.93%',
    display: 'flex',
    alignItems: 'center',
  },

  // Container for the trending post text
  trendingPosts1120ChristmasContainer1: {
    width: '100%',
  },

  // Last visited container
  lastVisited: {
    position: 'absolute',
    top: 506,
    left: 16,
    width: 356,
    height: 156,
  },

  // Last visited background
  lastVisited1: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f9c74f',
    width: 356,
    height: 146,
    opacity: 0.7,
  },

  // Last visited content container
  lastVisited1120ChristmasContainer: {
    position: 'absolute',
    width: '96.35%',
    top: '2.56%',
    left: '1.69%',
    display: 'flex',
    alignItems: 'center',
  },

  // User tag container
  userTag: {
    position: 'absolute',
    top: 234,
    left: -12,
    width: 370,
    height: 101,
    fontSize: 36,
  },

  // User tag background
  userTagChild: {
    position: 'absolute',
    top: 26,
    left: 14,
    backgroundColor: '#d63031',
    width: 356,
    height: 49,
    opacity: 0.7,
  },

  // Tag text inside the user tag
  tagGettinBy: {
    position: 'absolute',
    height: '100%',
    width: '92.7%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Profile Picture container
  profilePicture: {
    position: 'absolute',
    top: 126,
    left: 142,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    width: 118,
    height: 114,
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

  // Alex H profile image style
  alexHIcon: {
    position: 'absolute',
    top: 139,
    left: 160,
    width: 91,
    height: 89,
    resizeMode: 'cover', // Equivalent to object-fit: cover
  },
});

export default alexAccountScreenStyles;
