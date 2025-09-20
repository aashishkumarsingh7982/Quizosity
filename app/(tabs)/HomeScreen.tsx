import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
     
      <Animatable.Image 
        source={require('../../assets/icon.png')}
        style={styles.logo}
        animation="zoomIn" 
        duration={1000} 
      />
      
      <Animatable.Text 
        style={styles.title}
        animation="slideInUp"
        delay={300}
        duration={1000}
      >
        Welcome to Quizosity
      </Animatable.Text>
      
      <Animatable.Text 
        style={styles.subtitle}
        animation="slideInUp"
        delay={600}
        duration={1000}
      >
        A fun quiz app to test your knowledge
      </Animatable.Text>

      <Animatable.View 
        animation="fadeInUpBig"
        duration={1000}
        useNativeDriver
      >
        <TouchableOpacity 
          style={styles.startQuizButton}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.startQuizButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View 
        animation="fadeInUpBig" 
        duration={1000}
        useNativeDriver
      >
        <TouchableOpacity 
          style={styles.aboutButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.aboutButtonText}>About Us</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingHorizontal: 20,
    backgroundColor: '#CDF5FD', 
  },
  logo: {
    width: 200, 
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#00A9FF', 
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: '#b2dfdb',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    marginTop: 10, 
  },
  subtitle: {
    fontSize: 20,
    color: '#45CFDD',
    paddingHorizontal: 30,
    textAlign: 'center',
    textShadowColor: '#b2dfdb',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    fontStyle: 'italic',
    marginBottom: 60,
  },
  startQuizButton: {
    backgroundColor: '#89CFF3',
    paddingVertical: 20,
    paddingHorizontal:30,
    width: '80%',
    borderRadius: 15, 
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#004d40',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  startQuizButtonText: {
    color: '#ffffff',
    fontSize: 20, 
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  aboutButton: {
    backgroundColor: '#89CFF3',
    paddingVertical: 20,
    paddingHorizontal:30,
    width: '80%', 
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#00251a',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  aboutButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
