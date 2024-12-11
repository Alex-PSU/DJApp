// GachaScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import gachaScreenStyles from '../styles/GachaScreenStyles'; // Import the styles

const GachaScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={gachaScreenStyles.gachaScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct image path
        style={gachaScreenStyles.gachaScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={gachaScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct image path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={gachaScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct image path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Gacha title */}
      <View style={gachaScreenStyles.gacha}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>Gacha</Text>
      </View>

      {/* Banner 1 */}
      <View style={gachaScreenStyles.banner1}>
        <View style={gachaScreenStyles.banner1Child} />
        <View style={gachaScreenStyles.avalonsDracofest}>
          <Text style={{ color: '#fff' }}>Avalon’s Dracofest</Text>
        </View>
        <View style={gachaScreenStyles.pull}>
          <Text style={{ color: '#fff' }}>1 Pull</Text>
        </View>
        <View style={gachaScreenStyles.pull1}>
          <Text style={{ color: '#fff' }}>10 Pull</Text>
        </View>
      </View>

      {/* Banner 2 */}
      <View style={gachaScreenStyles.banner2}>
        <TouchableOpacity style={gachaScreenStyles.banner2Child} onPress={onArrowLeftIconClick} />
        <View style={gachaScreenStyles.banner1Child} />
        <View style={gachaScreenStyles.banner1} />
        <View style={gachaScreenStyles.avalonsDracofest}>
          <Text style={{ color: '#fff' }}>Almon’s First Trial of Love</Text>
        </View>
        <View style={gachaScreenStyles.pull}>
          <Text style={{ color: '#fff' }}>1 Pull</Text>
        </View>
        <View style={gachaScreenStyles.pull1}>
          <Text style={{ color: '#fff' }}>10 Pull</Text>
        </View>
      </View>
    </View>
  );
};

export default GachaScreen;
