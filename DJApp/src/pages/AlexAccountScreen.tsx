import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import alexAccountScreenStyles from '../styles/AlexAccountScreenStyles'; // Import the styles

const AlexAccountScreen: FunctionComponent = ({ navigation }: any) => {
  const onArrowLeftIconClick = useCallback(() => {
    // Navigate back to the previous screen when the arrow icon is clicked
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={alexAccountScreenStyles.alexAccountScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure the image path is correct
        style={alexAccountScreenStyles.alexAccountScreenChild}
      />

      {/* Alex H text */}
      <View style={alexAccountScreenStyles.alexH}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>
          Alex H
        </Text>
      </View>

      {/* Home Button */}
      <TouchableOpacity style={alexAccountScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure the image path is correct
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Trending Posts Section */}
      <View style={alexAccountScreenStyles.trendingPosts}>
        <View style={alexAccountScreenStyles.trendingPosts1} />
        <View style={alexAccountScreenStyles.trendingPosts1120ChristmasContainer}>
          <View style={alexAccountScreenStyles.trendingPosts1120ChristmasContainer1}>
            <Text style={{ margin: 0 }}>Trending Posts</Text>
            <Text>11/20-Christmas Event Prep-We are...</Text>
          </View>
        </View>
      </View>

      {/* Last Visited Section */}
      <View style={alexAccountScreenStyles.lastVisited}>
        <View style={alexAccountScreenStyles.trendingPosts1} />
        <View style={alexAccountScreenStyles.lastVisited1120ChristmasContainer}>
          <View style={alexAccountScreenStyles.trendingPosts1120ChristmasContainer1}>
            <Text style={{ margin: 0 }}>Last Visited</Text>
            <Text>11/20-Christmas Event Prep-11:59 PM</Text>
          </View>
        </View>
      </View>

      {/* User Tag Section */}
      <View style={alexAccountScreenStyles.userTag}>
        <View style={alexAccountScreenStyles.userTagChild} />
        <View style={alexAccountScreenStyles.tagGettinBy}>
          <Text>Tag: Gettin' By</Text>
        </View>
      </View>

      {/* Profile Picture */}
      <View style={alexAccountScreenStyles.profilePicture} />

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={alexAccountScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick} // Navigate back when the arrow icon is clicked
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure the image path is correct
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Alex H Profile Image */}
      <Image
        source={require('./assets/AlexH.png')} // Ensure the image path is correct
        style={alexAccountScreenStyles.alexHIcon}
      />
    </View>
  );
};

export default AlexAccountScreen;
