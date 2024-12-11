import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, Button } from 'react-native'; // Importing Text and Button for HomeScreen

// Importing the screens
import CreateAccountScreen from '../src/pages/CreateAccountScreen';
import AlexAccountScreen from '../src/pages/AlexAccountScreen';
import BannersScreen from '../src/pages/BannersScreen';
import BeastsScreen from '../src/pages/BeastsScreen';
import CharactersScreen from '../src/pages/CharactersScreen';
import DirectoryScreen from '../src/pages/DirectoryScreen';
import DivineScreen from '../src/pages/DivineScreen';

const Stack = createStackNavigator();  // Creating stack navigator

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">  {/* Set initial route */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="AlexAccount" component={AlexAccountScreen} />
        <Stack.Screen name="Banners" component={BannersScreen} />
        <Stack.Screen name="Beasts" component={BeastsScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Directory" component={DirectoryScreen} />
        <Stack.Screen name="Divine" component={DivineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Home screen component
function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Create Account" onPress={() => navigation.navigate('CreateAccount')} />
    </SafeAreaView>
  );
}

export default App;
