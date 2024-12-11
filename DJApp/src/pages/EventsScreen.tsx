// EventsScreen.tsx
import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import eventsScreenStyles from '../styles/EventsScreenStyles'; // Import the styles

const EventsScreen: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <View style={eventsScreenStyles.eventsScreen}>
      {/* Background Image */}
      <Image
        source={require('./assets/Rectangle3.png')} // Ensure correct image path
        style={eventsScreenStyles.eventsScreenChild}
      />

      {/* Home Button */}
      <TouchableOpacity style={eventsScreenStyles.homeButtonIcon}>
        <Image
          source={require('./assets/HomeButton.svg')} // Ensure correct image path
          style={{ width: 82, height: 77 }}
        />
      </TouchableOpacity>

      {/* Arrow Left Icon */}
      <TouchableOpacity
        style={eventsScreenStyles.arrowLeftIcon}
        onPress={onArrowLeftIconClick}
      >
        <Image
          source={require('./assets/ArrowLeft.svg')} // Ensure correct image path
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>

      {/* Events title */}
      <View style={eventsScreenStyles.events}>
        <Text style={{ fontSize: 48, fontFamily: 'Bungee Shade', color: '#fff' }}>Events</Text>
      </View>

      {/* Event 1 */}
      <View style={eventsScreenStyles.event1}>
        <View style={eventsScreenStyles.event3Child} />
        <View style={eventsScreenStyles.tba}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Almon’s First Trial of Love</Text>
        </View>
      </View>

      {/* Event 2 */}
      <View style={eventsScreenStyles.event2}>
        <View style={eventsScreenStyles.event3Child} />
        <View style={eventsScreenStyles.tba}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>TBA</Text>
        </View>
      </View>

      {/* Event 3 */}
      <View style={eventsScreenStyles.event3}>
        <View style={eventsScreenStyles.event3Child} />
        <View style={eventsScreenStyles.tba}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>TBA</Text>
        </View>
      </View>
    </View>
  );
};

export default EventsScreen;
