// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  directoryScreen: {
    width: '100%',
    height: '100%', // Using '100%' instead of hardcoding height for responsiveness
    textAlign: 'center',
    fontSize: 20,
    color: '#eadbc2', // Light text color
    fontFamily: 'Bungee', // Primary font for titles
    position: 'relative',
    backgroundColor: '#2f3d4f', // Background color for the screen
  },
  directoryScreenChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Cover the full width
    height: '100%', // Full height for the background image
    resizeMode: 'cover', // Object fit equivalent
  },
  userSearch: {
    position: 'absolute',
    top: 174,
    left: 5,
    width: 120,
    height: 106,
  },
  userSearch1: {
    position: 'absolute',
    top: 0,
    left: 6,
    backgroundColor: '#3498db', // Primary accent color
    width: 108,
    height: 106,
    shadowColor: 'rgba(0, 255, 0, 0.25)', // Green shadow for styling
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  magnifyingGlassIcon: {
    position: 'absolute',
    top: 4,
    left: 11,
    width: 100,
    height: 100,
  },
  userSearchText: {
    position: 'absolute',
    top: '13.21%',
    left: 0,
    height: '73.58%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    textShadowColor: 'red', // Red shadow effect for text
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 1,
  },
  account: {
    position: 'absolute',
    top: 174,
    left: 142,
    width: 120,
    height: 106,
  },
  account1: {
    position: 'absolute',
    top: 0,
    left: 5,
    backgroundColor: '#3498db', // Accent color matching 'userSearch1'
    width: 108,
    height: 106,
    shadowColor: 'rgba(0, 255, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  pencil03Icon: {
    position: 'absolute',
    top: 5,
    left: 8,
    width: 102,
    height: 88,
  },
  accountText: {
    position: 'absolute',
    top: '13.21%',
    left: 0,
    height: '73.58%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 1,
  },
  services: {
    position: 'absolute',
    height: '15.52%',
    width: '87.98%',
    top: '4.05%',
    left: '6.01%',
    fontSize: 48,
    fontFamily: 'Bungee Shade', // Secondary font for headings
    color: '#fff', // White color for the services text
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    position: 'absolute',
    top: 312,
    left: 144,
    width: 111,
    height: 106,
    fontSize: 15,
  },
  characters1: {
    position: 'absolute',
    top: 0,
    left: 3,
    backgroundColor: '#3498db', // Consistent accent color
    width: 108,
    height: 106,
    shadowColor: 'rgba(0, 255, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  shield01Icon: {
    position: 'absolute',
    top: 14,
    left: 18,
    width: 80,
    height: 80,
  },
  charactersText: {
    position: 'absolute',
    top: '13.21%',
    left: 0,
    height: '73.58%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 1,
  },
  // Add other styles for additional sections (Forum, Gacha, etc.)
});

export default styles;
