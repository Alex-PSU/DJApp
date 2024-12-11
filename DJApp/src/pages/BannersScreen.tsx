import { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/BannersScreenStyles'; // Import screen styles

const BannersScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your navigation or action logic here
  }, []);

  return (
    <View style={styles.bannersScreen}>
      <Image
        source={require('./path-to-your-image/Rectangle3.png')} // Update path to the image
        style={styles.bannersScreenChild}
      />
      <TouchableOpacity onPress={onArrowLeftIconClick} style={styles.arrowLeftIcon}>
        <Image
          source={require('./path-to-your-image/ArrowLeft.svg')} // Update path to the image
          style={styles.arrowLeftIconImage}
        />
      </TouchableOpacity>
      <Text style={styles.banners}>Banners</Text>

      {/* Banner 3 */}
      <View style={styles.banner3}>
        <View style={styles.banner3Child} />
        <Text style={styles.tba}>TBA</Text>
      </View>

      {/* Banner 2 */}
      <View style={styles.banner2}>
        <View style={styles.banner3Child} />
        <Text style={styles.tba}>Almon’s First Trial of Love</Text>
      </View>

      {/* Banner 1 */}
      <View style={styles.banner1}>
        <View style={styles.banner3Child} />
        <Text style={styles.tba}>Avalon’s Dracofest</Text>
      </View>

      <Image
        source={require('./path-to-your-image/HomeButton.svg')} // Update path to the image
        style={styles.homeButtonIcon}
      />
    </View>
  );
};

export default BannersScreen;
