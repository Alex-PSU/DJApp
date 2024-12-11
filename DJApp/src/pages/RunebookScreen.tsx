// RunebookScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import runebookScreenStyles from '../styles/RunebookScreenStyles'; // Import the styles

const RunebookScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={runebookScreenStyles.runebookScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct image path
        style={runebookScreenStyles.runebookScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={runebookScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct image path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={runebookScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct image path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Runebook Title */}
      <View style={runebookScreenStyles.runebook}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>
          Runebook
        </Text>
      </View>

      {/* Rectangle Shapes */}
      <View style={runebookScreenStyles.runebookScreenItem} />
      <View style={runebookScreenStyles.runebookScreenInner} />
      <View style={runebookScreenStyles.rectangleDiv} />

      {/* Line Separators */}
      <View style={runebookScreenStyles.lineDiv} />
      <View style={runebookScreenStyles.runebookScreenChild} />
      <View style={runebookScreenStyles.runebookScreenChild} />
      <View style={runebookScreenStyles.runebookScreenChild} />

      {/* Name and Description of Fireball */}
      <View style={runebookScreenStyles.nameFireballDescriptionContainer}>
        <Text style={{ color: '#f9c74f', fontFamily: 'Brygada 1918', fontSize: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Name:</Text> Fireball{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Description:</Text> Ranged Spell. Hits anyone within a 60 foot radius. Has a 30 foot Range. Deals 4d6+INT damage. Hits both enemies and allies.
        </Text>
      </View>

      {/* Star Icon */}
      <Image
        source={require('./assets/Star1.svg')} // Ensure correct image path
        style={runebookScreenStyles.starIcon}
      />

      {/* Polygon Icon */}
      <Image
        source={require('./assets/Polygon1.svg')} // Ensure correct image path
        style={runebookScreenStyles.polygonIcon}
      />

      {/* Ellipse Icon */}
      <View style={runebookScreenStyles.ellipseDiv} />
    </View>
  );
};

export default RunebookScreen;
