// RunebookScreenStyles.ts
import { StyleSheet } from 'react-native';

const runebookScreenStyles = StyleSheet.create({
  // Base container for the Runebook Screen
  runebookScreen: {
    width: '100%',
    position: 'relative',
    height: 874,
    textAlign: 'center',
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Bungee Shade', // Custom font
  },

  // Background image style
  runebookScreenChild: {
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

  // Runebook title style
  runebook: {
    position: 'absolute',
    height: '15.79%',
    width: '95.02%',
    top: '6.18%',
    left: '2.99%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Rectangle elements for styling (using absolute positioning)
  runebookScreenItem: {
    position: 'absolute',
    top: 224,
    left: 12,
    backgroundColor: '#000',
    width: 107,
    height: 102,
  },
  runebookScreenInner: {
    position: 'absolute',
    top: 224,
    left: 149,
    backgroundColor: '#000',
    width: 107,
    height: 102,
  },
  rectangleDiv: {
    position: 'absolute',
    top: 224,
    left: 287,
    backgroundColor: '#000',
    width: 107,
    height: 102,
  },

  // Line separator style (removed boxSizing)
  lineDiv: {
    position: 'absolute',
    top: 316,
    left: 76,
    backgroundColor: '#000',
    borderRightWidth: 20,
    borderRightColor: '#000',
    width: 20,
    height: 131,
  },
  
  // Character description and name container
  nameFireballDescriptionContainer: {
    position: 'absolute',
    height: '8.58%',
    width: '63.18%',
    top: '56.52%',
    left: '18.41%',
    fontSize: 20,
    fontFamily: 'Brygada 1918',
    color: '#f9c74f',
    display: 'flex',
    alignItems: 'center',
  },

  // Star Icon
  starIcon: {
    position: 'absolute',
    top: 234,
    left: 29,
    width: 74,
    height: 82,
  },

  // Polygon Icon
  polygonIcon: {
    position: 'absolute',
    top: 235,
    left: 168,
    width: 69,
    height: 91,
  },

  // Ellipse shape style
  ellipseDiv: {
    position: 'absolute',
    top: 239,
    left: 306,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    width: 69,
    height: 73,
  },
});

export default runebookScreenStyles;
