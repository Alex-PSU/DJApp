import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/ForumRulesStyle';

const ForumRulesScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for navigation or back action
  }, []);

  return (
    <View style={styles.forumRulesScreen}>
      <Image
        source={require('./path-to-your-image/Rectangle3.png')} // Update the path
        style={styles.forumRulesScreenChild}
      />
      <Text style={styles.rules}>Rules</Text>
      <TouchableOpacity onPress={onArrowLeftIconClick} style={styles.arrowLeftIcon}>
        <Image
          source={require('./path-to-your-image/ArrowLeft.svg')} // Update path
          style={styles.arrowLeftIconImage}
        />
      </TouchableOpacity>

      <View style={styles.selector} />

      {/* Category Items */}
      {[...Array(6)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.category,
            { top: 191 + index * 100 },
          ]}
        >
          <View style={styles.categoryChild} />
          <Text style={styles.alexH}>{`Alex H.`}</Text>
          <Text style={styles.date}>{`11/21`}</Text>
          <Text style={styles.categoryLabel}>{`Category ${6 - index}`}</Text>
        </View>
      ))}

      {/* Home button */}
      <Image
        source={require('./path-to-your-image/HomeButton.svg')} // Update path
        style={styles.homeButtonIcon}
      />
    </View>
  );
};

export default ForumRulesScreen;
