import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

// Import the styles
import styles from '../styles/LoginScreenStyles'; // Correctly importing the styles

// Import the background image
const BackgroundImage = require('./assets/LoginScreen.png'); // Corrected the import of image

const LoginScreen: FunctionComponent = () => {
    const onSignUpButtonClick = useCallback(() => {
        // Handle sign-up button click
    }, []);

    return (
        <View style={styles.loginScreen}>
            {/* Background Image */}
            <Image source={BackgroundImage} style={styles.loginScreenChild} />

            <Text style={styles.dontHaveAn}>Don’t Have an Account?</Text>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} onPress={onSignUpButtonClick}>
                <Text style={styles.signUp}>Sign-Up</Text>
            </TouchableOpacity>

            {/* Username Field */}
            <View style={styles.usernameField}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#b3b3b3"
                />
            </View>

            {/* Password Field */}
            <View style={styles.passwordField}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#b3b3b3"
                    secureTextEntry
                />
            </View>

            {/* DJ Companion Title */}
            <View style={styles.djCompanion}>
                <Text style={styles.dj}>DJ</Text>
                <Text style={styles.dj}>Companion</Text>
            </View>
        </View>
    );
};

export default LoginScreen;
