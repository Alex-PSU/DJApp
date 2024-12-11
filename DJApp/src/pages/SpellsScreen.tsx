// SpellsScreen.tsx
import { FunctionComponent, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/SpellsScreenStyles';

const SpellsScreen: FunctionComponent = () => {

  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={styles.spellsScreen}>
      <Image style={styles.spellsScreenChild} source={require('./Rectangle 3.png')} />
      <Image style={styles.homeButtonIcon} source={require('./Home Button.svg')} />
      <Image style={styles.arrowLeftIcon} source={require('./Arrow left.svg')} onClick={onArrowLeftIconClick} />
      <Text style={styles.spells}>Spells</Text>
      
      <View style={styles.spells1}>
        <View style={styles.spells3Child} />
        <Text style={styles.counterRune}>Fireball</Text>
      </View>

      <View style={styles.spells2}>
        <View style={styles.spells3Child} />
        <Text style={styles.counterRune}>Fire Bolt</Text>
      </View>

      <View style={styles.spells3}>
        <View style={styles.spells3Child} />
        <Text style={styles.counterRune}>Counter-Rune</Text>
      </View>
    </View>
  );
};

export default SpellsScreen;
