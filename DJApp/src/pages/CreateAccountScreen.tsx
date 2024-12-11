import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import axios from 'axios'; // Import axios for HTTP requests
import createAccountScreenStyles from '../styles/CreateAccountScreenStyles'; // Importing styles

const CreateAccountScreen: React.FunctionComponent = ({ navigation }: any) => {
  // State variables to hold input data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validate the input fields before sending to the backend
  const handleRegister = useCallback(async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });

      // Handle success response from backend
      Alert.alert('Success', response.data.message);
      // Navigate to login or another screen after successful registration
      navigation.navigate('Home');  // You can navigate to 'Login' or another screen as needed
    } catch (error) {
      // Handle error response from backend
      Alert.alert('Error', error.response?.data?.message || 'Error registering user');
    }
  }, [username, email, password, confirmPassword]);

  return (
    <View style={createAccountScreenStyles.createAccountScreen}>
      {/* Background Image */}
      <Image 
        source={require('../images/Create Account Screen.png')} 
        style={createAccountScreenStyles.backgroundImage} 
      />

      {/* Heading */}
      <View style={createAccountScreenStyles.djCompanion}>
        <Text style={createAccountScreenStyles.dj}>DJ</Text>
        <Text style={createAccountScreenStyles.dj}>Companion</Text>
      </View>

      {/* Username Field */}
      <View style={createAccountScreenStyles.usernameField}>
        <TextInput
          style={createAccountScreenStyles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#888"
        />
      </View>

      {/* Email Field */}
      <View style={createAccountScreenStyles.usernameField}>
        <TextInput
          style={createAccountScreenStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
      </View>

      {/* Password Field */}
      <View style={createAccountScreenStyles.passwordField}>
        <TextInput
          style={createAccountScreenStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      {/* Confirm Password Field */}
      <View style={createAccountScreenStyles.confirmpasswordField}>
        <TextInput
          style={createAccountScreenStyles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      {/* Register Button */}
      <View style={createAccountScreenStyles.loginButton}>
        <Button title="Register" onPress={handleRegister} color="#f9c74f" />
      </View>

      {/* Have an Account Text */}
      <Text style={createAccountScreenStyles.haveAnAccount}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default CreateAccountScreen;
