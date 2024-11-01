import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [showPassword, setShowPassword] = useState(false);

  const styles = isDarkMode ? darkStyles : lightStyles;

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={24} color={isDarkMode ? '#ffafb8' : '#333'} />
      </TouchableOpacity>

      <Image source={require('./assets/LOGO.gif')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <View style={styles.iconInput}>
          <Ionicons name="person-circle" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
          <TextInput
            placeholder="Email/Username"
            placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
            style={styles.input}
          />
        </View>
        <View style={styles.iconInput}>
            <Ionicons name="lock-closed" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
              secureTextEntry={!showPassword}
              style={styles.input}
            />

        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.socialIconsContainer}>
        <Ionicons name="logo-google" size={32} color="#DB4437" style={styles.socialIcon} />
        <Ionicons name="logo-instagram" size={32} color="#E1306C" style={styles.socialIcon} />
        <Ionicons name="logo-facebook" size={32} color="#4267B2" style={styles.socialIcon} />
        <Ionicons name="chatbubbles" size={32} color="#34C759" style={styles.socialIcon} />
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don’t have an account?
          <Text style={styles.signupLinkText}> REGISTER</Text>
        </Text>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={20} color={isDarkMode ? '#EFE9E2' : '#333'} />
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// STYLES FOR LIGHT AND DARK MODE
const commonStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#888',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  signupContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#888',
  },
  signupLinkText: {
    color: '#ffafb8',
    fontWeight: 'bold',
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  helpText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#888',
  },
};

const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#FFE5E5',
  },
  title: {
    ...commonStyles.title,
    color: '#333',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
});

const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#333',
  },
  title: {
    ...commonStyles.title,
    color: '#FFE5E5',
  },
  inputContainer: {
    ...commonStyles.inputContainer,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconInput: {
    ...commonStyles.iconInput,
    backgroundColor: '#555',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
  separatorLine: {
    ...commonStyles.separatorLine,
    backgroundColor: '#b0b0b0',
  },
  separatorText: {
    ...commonStyles.separatorText,
    color: '#b0b0b0',
  },
  helpText: {
    ...commonStyles.helpText,
    color: '#FFE5E5',
  },
});
