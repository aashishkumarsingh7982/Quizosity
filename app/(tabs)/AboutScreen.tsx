import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Clipboard } from 'react-native';

const AboutScreen = ({ navigation }) => {
  const fadeAnimImage = useRef(new Animated.Value(0)).current; 
  const fadeAnimText = useRef(new Animated.Value(0)).current;  
  const handleEmailPress = async () => {
    const email = 'aashishkumarsingh00@gmail.com';
    await Clipboard.setString(email);
    alert('Email copied to clipboard!');
  };

  useEffect(() => {
    
    Animated.parallel([
      Animated.timing(fadeAnimImage, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimText, {
        toValue: 1,
        duration: 1000,
        delay: 1000, 
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={{ opacity: fadeAnimImage }}>
        <Image source={require('../../assets/my.png')} style={styles.profileImage} />
      </Animated.View>
      <Animated.View style={{ opacity: fadeAnimText }}>
        <Text style={styles.title}>About the Developer</Text>
        <Text style={styles.info}>
          Hello! I'm Aashish Kumar Singh, a passionate full stack developer with experience in creating engaging and user-friendly applications.
        </Text>
        <Text style={styles.info}>
          I believe in the power of technology to create educational experiences, and I'm excited to bring this Quizosity app to life!
        </Text>
        <Text style={styles.sectionTitle}>My Background</Text>
        <Text style={styles.info}>
          I have 1 Month of experience in web and mobile development, with a focus on creating intuitive and enjoyable user experiences.
        </Text>
        <Text style={styles.sectionTitle}>Contact Me</Text>
        <Text style={styles.info}>
          I love hearing from users! If you have any questions or feedback, feel free to reach out:
        </Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.contact}>Email: aashishkumarsingh00@gmail.com</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#C4DAD1',
    alignItems: 'center', 
  },
  profileImage: {
    width: 150,   
    height: 150,  
    borderRadius: 75, 
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center', 
    lineHeight: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796b', 
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'left',
    width: '100%', 
  },
  contact: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 5,
    textAlign: 'left',
    width: '100%', 
    textDecorationLine: 'underline', 
  },
});

export default AboutScreen;