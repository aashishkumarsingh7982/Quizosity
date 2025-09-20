import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ResultScreen = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;

  const handleRetry = () => {
    
    navigation.navigate('Quiz', { reset: true });
  };

  return (
    <View style={styles.container}>
      {score >= 20 ? (
        <Animatable.View animation="fadeIn" duration={1000} style={styles.congratulationsContainer}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.scoreText}>
            Your Score: {score} / {totalQuestions}
          </Text>
          <Text style={styles.message}>You did an amazing job!</Text>
    
        </Animatable.View>
      ) : (
        <Animatable.View animation="shake" duration={1000} style={styles.retryContainer}>
          <Text style={styles.title}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>
            Your Score: {score} / {totalQuestions}
          </Text>
          <Text style={styles.message}>Don't give up! Try again!</Text>
        </Animatable.View>
      )}

      <TouchableOpacity
        style={styles.retryButton}
        onPress={handleRetry}
      >
        <Text style={styles.retryButtonText}>Retry Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fce4ec', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e91e63', 
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#d81b60', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  scoreText: {
    fontSize: 24,
    color: '#e91e63', 
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 20,
    color: '#880e4f', 
    textAlign: 'center',
    marginBottom: 30,
  },
  retryButton: {
    backgroundColor: '#e91e63', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#d81b60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#880e4f', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  congratulationsContainer: {
    alignItems: 'center',
  },
  retryContainer: {
    alignItems: 'center',
  },
});

export default ResultScreen;
