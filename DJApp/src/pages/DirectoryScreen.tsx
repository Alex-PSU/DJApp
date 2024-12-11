// DirectoryScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/DirectoryScreenStyle';

const DirectoryScreen: FunctionComponent = () => {
  const onUserSearchTextClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={styles.directoryScreen}>
      <Image style={styles.directoryScreenChild} source={require('./Rectangle 2.png')} />
      <View style={styles.userSearch}>
        <View style={styles.userSearch1} />
        <Image style={styles.magnifyingGlassIcon} source={require('./Magnifying Glass.svg')} />
        <TouchableOpacity onPress={onUserSearchTextClick}>
          <Text style={styles.userSearchText}>User Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <View style={styles.account1} />
        <Image style={styles.pencil03Icon} source={require('./Pencil 03.svg')} />
        <TouchableOpacity onPress={onUserSearchTextClick}>
          <Text style={styles.accountText}>Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forum}>
        <View style={styles.forums} />
        <Image style={styles.bookmarkIcon} source={require('./Bookmark.svg')} />
        <Text style={styles.forumText}>Forum</Text>
      </View>
      {/* Repeat similar blocks for other sections */}
      <Text style={styles.services}>Services</Text>
      <View style={styles.characters}>
        <View style={styles.characters1} />
        <Image style={styles.shield01Icon} source={require('./Shield 01.svg')} />
        <TouchableOpacity onPress={onUserSearchTextClick}>
          <Text style={styles.charactersText}>Characters</Text>
        </TouchableOpacity>
      </View>
      {/* Add more sections like Stories, Tutorials, etc. */}
    </View>
  );
};

export default DirectoryScreen;
