import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/ForumNewsGameStyle';

const ForumNewsGameScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for the back navigation or action
  }, []);

  return (
    <View style={styles.forumNewsGameScreen}>
      <Image
        source={require('./path-to-your-image/Rectangle3.png')} // Update path accordingly
        style={styles.forumNewsGameScreenChild}
      />
      <Text style={styles.newsGame}>News (Game)</Text>
      <TouchableOpacity onPress={onArrowLeftIconClick} style={styles.arrowLeftIcon}>
        <Image
          source={require('./path-to-your-image/ArrowLeft.svg')} // Update path accordingly
          style={styles.arrowLeftIconImage}
        />
      </TouchableOpacity>

      <View style={styles.selector} />

      {/* List of news topics */}
      {[...Array(6)].map((_, index) => (
        <View style={[styles.newsTopic, { top: 191 + index * 100 }]}>
          <View style={styles.newsTopicChild} />
          <Text style={styles.alexH}>Alex H.</Text>
          <Text style={styles.date}>{`11/21`}</Text>
          <Text style={styles.newsTitle}>{`News Event ${index + 1}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default ForumNewsGameScreen;
