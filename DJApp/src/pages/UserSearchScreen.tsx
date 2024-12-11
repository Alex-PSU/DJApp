// UserSearchScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/UserSearchScreenStyle';

const UserSearchScreen: FunctionComponent = () => {
  const onInputContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={styles.userSearchScreen}>
      <Image
        style={styles.userSearchScreenChild}
        source={require('./assets/Rectangle3.png')} // Adjust path to your image
      />
      <Text style={styles.suggested}>Suggested</Text>

      <View style={styles.input}>
        <Text style={styles.username}>Username</Text>
      </View>

      <TouchableOpacity style={styles.input1} onPress={onInputContainerClick}>
        <Text style={styles.username}>Test User #1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input2} onPress={onInputContainerClick}>
        <Text style={styles.username}>Test User #2</Text>
      </TouchableOpacity>

      <Image
        style={styles.magnifyingGlassIcon}
        source={require('./assets/MagnifyingGlass.svg')} // Adjust path to your image
      />

      <Image
        style={styles.homeButtonIcon}
        source={require('./assets/HomeButton.svg')} // Adjust path to your image
      />
    </View>
  );
};

export default UserSearchScreen;
