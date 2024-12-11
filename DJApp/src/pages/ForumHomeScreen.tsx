// ForumHomeScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/ForumHomeStyle';

const ForumHomeScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for back navigation or any other functionality
  }, []);

  return (
    <View style={globalStyles.centerAlign}>
      <Image
        style={styles.forumHomeScreenChild}
        source={require('./assets/Rectangle3.png')} // Adjust the path to your image
      />

      <View style={styles.forumHome}>
        <Text style={styles.forum}>Forum</Text>
        <Text style={styles.forum}>Home</Text>
      </View>

      <Image
        style={styles.homeButtonIcon}
        source={require('./assets/HomeButton.svg')} // Adjust the path to your image
      />

      <TouchableOpacity style={styles.arrowLeftIcon} onPress={onArrowLeftIconClick}>
        <Image
          style={styles.arrowLeftIconImage}
          source={require('./assets/ArrowLeft.svg')} // Adjust the path to your image
        />
      </TouchableOpacity>

      <View style={styles.grouping} />

      <TouchableOpacity style={styles.newsGame} onPress={onArrowLeftIconClick}>
        <View style={styles.newsGameChild} />
        <Text style={styles.newsGame1}>News (Game)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newsApp} onPress={onArrowLeftIconClick}>
        <View style={styles.newsGameChild} />
        <Text style={styles.newsApp1}>News (App)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rules} onPress={onArrowLeftIconClick}>
        <View style={styles.rulesChild} />
        <Text style={styles.newsApp1}>Rules</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.casual} onPress={onArrowLeftIconClick}>
        <View style={styles.newsGameChild} />
        <Text style={styles.newsApp1}>Casual</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topics} onPress={onArrowLeftIconClick}>
        <View style={styles.newsGameChild} />
        <Text style={styles.newsGame1}>Topics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForumHomeScreen;
