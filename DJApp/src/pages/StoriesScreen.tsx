// StoriesScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import storiesScreenStyles from '../styles/StoriesScreenStyle'; // Import styles

const StoriesScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Handle navigation or any action when the arrow icon is clicked
  }, []);

  return (
    <View style={storiesScreenStyles.storiesScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct path
        style={storiesScreenStyles.storiesScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={storiesScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity 
        style={storiesScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={storiesScreenStyles.stories}>
        Stories
      </Text>

      {/* Story Cards */}
      <View style={storiesScreenStyles.story3}>
        <View style={storiesScreenStyles.story3Child} />
        <Text style={storiesScreenStyles.tba}>TBA</Text>
      </View>
      
      <View style={storiesScreenStyles.story2}>
        <View style={storiesScreenStyles.story3Child} />
        <Text style={storiesScreenStyles.tba}>TBA</Text>
      </View>
      
      <View style={storiesScreenStyles.story1}>
        <View style={storiesScreenStyles.story3Child} />
        <Text style={storiesScreenStyles.tba}>Avalon’s Dracofest</Text>
      </View>
    </View>
  );
};

export default StoriesScreen;
