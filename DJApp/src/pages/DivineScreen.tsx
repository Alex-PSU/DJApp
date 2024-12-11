import { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/DivineScreenStyles';

const DivineScreen: FunctionComponent = () => {

  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={styles.divineScreen}>
      <Image style={styles.divineScreenChild} source={require('./Rectangle 3.png')} />
      <Image style={styles.homeButtonIcon} source={require('./Home Button.svg')} />
      
      {/* Wrap the arrow left icon with TouchableOpacity */}
      <TouchableOpacity onPress={onArrowLeftIconClick}>
        <Image style={styles.arrowLeftIcon} source={require('./Arrow left.svg')} />
      </TouchableOpacity>

      <Text style={styles.divine}>Divine</Text>

      <View style={styles.divine1}>
        <View style={styles.divine3Child} />
        <Text style={styles.tba}>Almon</Text>
      </View>

      <View style={styles.divine2}>
        <View style={styles.divine3Child} />
        <Text style={styles.tba1}>TBA</Text>
      </View>

      <View style={styles.divine3}>
        <View style={styles.divine3Child} />
        <Text style={styles.tba}>TBA</Text>
      </View>
    </View>
  );
};

export default DivineScreen;

