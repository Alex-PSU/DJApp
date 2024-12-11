import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        backgroundColor: '#f9c74f', // Background color
        fontFamily: 'Inter', // Add your font family
    },
    loginScreenChild: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5, // Semi-transparent image overlay
    },
    dontHaveAn: {
        position: 'absolute',
        top: '70%', // Adjusted to be more flexible with screen sizes
        left: '15%',
        fontSize: 20,
        fontFamily: 'Exo',
        textAlign: 'center',
        color: '#3a3a3a', // Text color
    },
    signUpButton: {
        position: 'absolute',
        top: '75%', // Adjusted to be more flexible with screen sizes
        left: '10%',
        width: '80%', // Made the button width flexible
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#f9c74f',
        borderWidth: 1,
        backgroundColor: '#1e1e1e',
    },
    signUp: {
        color: '#f9c74f',
        fontSize: 24,
        fontFamily: 'Gruppo',
    },
    input: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f9c74f',
        fontSize: 16,
    },
    usernameField: {
        position: 'absolute',
        top: '50%', // Adjusted to be more flexible with screen sizes
        left: '10%',
        width: '80%',
    },
    passwordField: {
        position: 'absolute',
        top: '60%', // Adjusted to be more flexible with screen sizes
        left: '10%',
        width: '80%',
    },
    djCompanion: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontSize: 48,
        color: '#3a3a3a',
        textShadowColor: '#e74c3c',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    dj: {
        margin: 0,
        color: '#3a3a3a',
    },
});

export default styles;
