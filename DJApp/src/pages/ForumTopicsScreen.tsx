import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles/ForumTopicsStyle';

const ForumTopicsScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your navigation or action logic here
  }, []);

  return (
    <View style={styles.forumTopicsScreen}>
      <Image
        source={require('./path-to-your-image/Rectangle3.png')} // Update path
        style={styles.forumTopicsScreenChild}
      />
      <Text style={styles.topics}>Topics</Text>
      
      <TouchableOpacity onPress={onArrowLeftIconClick} style={styles.arrowLeftIcon}>
        <Image
          source={require('./path-to-your-image/ArrowLeft.svg')} // Update path
          style={styles.arrowLeftIconImage}
        />
      </TouchableOpacity>

      <View style={styles.selector} />

      {/* Category 6 */}
      <View style={styles.categorySix}>
        <View style={styles.categorySixChild} />
        <Text style={styles.alexH}>Alex H.</Text>
        <Text style={styles.div}>11/21</Text>
        <Text style={styles.contests}>Contests</Text>
      </View>

      {/* Category 5 */}
      <View style={styles.categoryFive}>
        <View style={styles.categoryFiveChild} />
        <Text style={styles.alexH1}>Alex H.</Text>
        <Text style={styles.div1}>10/19</Text>
        <Text style={styles.fanworks}>Fanworks</Text>
      </View>

      {/* Category 4 */}
      <View style={styles.categoryFour}>
        <View style={styles.categoryFourChild} />
        <Text style={styles.alexH2}>Alex H.</Text>
        <Text style={styles.div2}>09/16</Text>
        <Text style={styles.tacticsDiscussion}>Tactics Discussion</Text>
      </View>

      {/* Category 3 */}
      <View style={styles.categoryThree}>
        <View style={styles.categoryThreeChild} />
        <Text style={styles.alexH3}>Alex H.</Text>
        <Text style={styles.div3}>08/14</Text>
        <Text style={styles.storyeventsDiscussion}>Story/Events Discussion</Text>
      </View>

      {/* Category 2 */}
      <View style={styles.categoryTwo}>
        <View style={styles.categoryFiveChild} />
        <Text style={styles.alexH4}>Alex H.</Text>
        <Text style={styles.div4}>07/11</Text>
        <Text style={styles.bannersDiscussion}>Banners Discussion</Text>
      </View>

      {/* Category 1 */}
      <View style={styles.categoryOne}>
        <View style={styles.categoryFiveChild} />
        <Text style={styles.alexH5}>Alex H.</Text>
        <Text style={styles.div5}>06/31</Text>
        <Text style={styles.charactersDiscussion}>Characters Discussion</Text>
      </View>

      <Image
        source={require('./path-to-your-image/HomeButton.svg')} // Update path
        style={styles.homeButtonIcon}
      />
    </View>
  );
};

export default ForumTopicsScreen;
