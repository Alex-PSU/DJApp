import { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/BeastsScreenStyles'; // Importing styles for React Native

const BeastsScreen: FunctionComponent = () => {

  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for the left arrow button click
  }, []);

  return (
    <View style={styles.beastsScreen}>
      <Image style={styles.beastsScreenChild} source={require('./Rectangle 3.png')} />
      <Image style={styles.homeButtonIcon} source={require('./Home Button.svg')} />
      
      {/* Use TouchableOpacity for handling onPress */}
      <TouchableOpacity onPress={onArrowLeftIconClick}>
        <Image style={styles.arrowLeftIcon} source={require('./Arrow left.svg')} />
      </TouchableOpacity>

      <Text style={styles.beasts}>Beasts</Text>

      <View style={styles.beasts1}>
        <View style={styles.beasts3Child} />
        <Text style={styles.tba}>Dragon</Text>
      </View>

      <View style={styles.beasts2}>
        <View style={styles.beasts2Child} />
        <Text style={styles.tba1}>TBA</Text>
      </View>

      <View style={styles.beasts3}>
        <View style={styles.beasts3Child} />
        <Text style={styles.tba}>TBA</Text>
      </View>
    </View>
  );
};

export default BeastsScreen;
