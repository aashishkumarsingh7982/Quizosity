import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { UserContext } from './UserContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const { storedUserData } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hashPassword = (password) => {
    return password.split('').reverse().join('');
  };

  const handleLogin = () => {
    if (!storedUserData) {
      Alert.alert('Error', 'No user registered. Please sign up first.');
      return;
    }

    const hashedPassword = hashPassword(password);

    if (email === storedUserData.email && hashedPassword === storedUserData.password) {
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Quizosity</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.signupButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D6EFD8', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A5319', 
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#1A5319',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#80AF81',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, 
  },
  loginButton: {
    backgroundColor: '#508D4E',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#508D4E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#80AF81', 
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
