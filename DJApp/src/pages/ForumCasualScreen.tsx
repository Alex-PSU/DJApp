import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/ForumCasualStyle';

const ForumCasualScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for navigation or back action
  }, []);

  return (
    <View style={styles.forumCasualScreen}>
      <Image
        source={require('./path-to-your-image/Rectangle3.png')} // Update the path
        style={styles.forumCasualScreenChild}
      />
      <Text style={styles.casual}>Casual</Text>
      <TouchableOpacity onPress={onArrowLeftIconClick} style={styles.arrowLeftIcon}>
        <Image
          source={require('./path-to-your-image/ArrowLeft.svg')} // Update path
          style={styles.arrowLeftIconImage}
        />
      </TouchableOpacity>

      <View style={styles.forumCasualScreenItem} />

      <Text style={styles.alexHWelcome}>Alex H.: Welcome to Casual Chat!</Text>
      <Text style={styles.userOneThis}>User One: This is Amazing!</Text>

      <Image
        source={require('./path-to-your-image/HomeButton.svg')} // Update path
        style={styles.homeButtonIcon}
      />
    </View>
  );
};

export default ForumCasualScreen;
