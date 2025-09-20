import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from '../(tabs)/UserContext';
import SignupScreen from '../(tabs)/SignupScreen';
import LoginScreen from '../(tabs)/LoginScreen';
import QuizScreen from '../(tabs)/QuizScreen';
import ResultScreen from '../(tabs)/ResultScreen';
import HomeScreen from '../(tabs)/HomeScreen';
import AboutScreen from '../(tabs)/AboutScreen';


const Stack = createStackNavigator();

export default function Index() {
  return (
    <UserProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </UserProvider>
  );
}