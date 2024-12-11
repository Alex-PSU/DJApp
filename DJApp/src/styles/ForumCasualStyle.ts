import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  forumCasualScreen: {
    flex: 1,
    position: 'relative',
    textAlign: 'center',
    fontSize: 20,
    color: '#f9c74f',
    fontFamily: 'Brygada 1918', // Ensure this font is available
  },
  forumCasualScreenChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 917,
    resizeMode: 'cover',
  },
  casual: {
    position: 'absolute',
    height: '15.79%',
    width: '91.04%',
    top: '7.21%',
    left: '4.48%',
    fontSize: 48,
    fontFamily: 'Bungee Shade',
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },
  arrowLeftIcon: {
    position: 'absolute',
    top: 63,
    left: 2,
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  arrowLeftIconImage: {
    width: '100%',
    height: '100%',
  },
  forumCasualScreenItem: {
    position: 'absolute',
    top: 181,
    left: 33,
    backgroundColor: '#090b0b',
    width: 336,
    height: 586,
    opacity: 0.75,
  },
  alexHWelcome: {
    position: 'absolute',
    top: '21.74%',
    left: '12.44%',
    fontSize: 20,
    color: '#fff',
  },
  userOneThis: {
    position: 'absolute',
    top: '24.37%',
    left: '19.4%',
    fontSize: 20,
    color: '#fff',
  },
  homeButtonIcon: {
    position: 'absolute',
    top: 797,
    left: 160,
    width: 82,
    height: 77,
  },
});
