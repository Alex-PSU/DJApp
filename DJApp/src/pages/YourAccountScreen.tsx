// YourAccountScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/YourAccountScreenStyle';

const YourAccountScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here for back navigation or any other functionality
  }, []);

  return (
    <View style={globalStyles.centerAlign}>
      <Image
        style={styles.yourAccountScreenChild}
        source={require('./assets/Rectangle3.png')} // Adjust path to your image
      />
      <Text style={styles.userName}>User Name</Text>

      <Image
        style={styles.homeButtonIcon}
        source={require('./assets/HomeButton.svg')} // Adjust path to your image
      />

      <View style={styles.trendingPosts}>
        <View style={styles.trendingPosts1} />
        <Text style={styles.trendingPosts2}>Trending Posts</Text>
      </View>

      <View style={styles.lastVisited}>
        <View style={styles.lastVisited1} />
        <Text style={styles.lastVisited2}>Last Visited</Text>
      </View>

      <View style={styles.options}>
        <View style={styles.optionsChild} />
        <View style={styles.optionsItem} />
        <Image
          style={styles.bookmarkIcon}
          source={require('./assets/Bookmark.svg')} // Adjust path to your image
        />
        <Image
          style={styles.settingsIcon}
          source={require('./assets/Settings.svg')} // Adjust path to your image
        />
        <Image
          style={styles.pencil03Icon}
          source={require('./assets/Pencil03.svg')} // Adjust path to your image
        />
        <Text style={styles.tagNa}>Tag: N/A</Text>
      </View>

      <View style={styles.profilePicture} />

      <TouchableOpacity
        style={styles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          style={styles.arrowLeftIconImage}
          source={require('./assets/ArrowLeft.svg')} // Adjust path to your image
        />
      </TouchableOpacity>
    </View>
  );
};

export default YourAccountScreen;
