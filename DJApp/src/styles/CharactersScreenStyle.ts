import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  charactersScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },

  charactersScreenChild: {
    width: '100%',
    height: 200,  // Set a specific height as 'auto' is not supported in React Native
    marginBottom: 20,
  },

  homeButtonIcon: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  arrowLeftIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  characters: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  character3: {
    backgroundColor: 'gray',
    marginBottom: 10,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },

  character3Child: {
    height: 100,
    width: '100%',
    backgroundColor: 'blue',
  },

  eury: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },

  character2: {
    backgroundColor: 'gray',
    marginBottom: 10,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },

  character1: {
    backgroundColor: 'gray',
    marginBottom: 10,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },

  tba: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
