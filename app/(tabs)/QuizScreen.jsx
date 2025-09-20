import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';


const quizQuestions = [
  {
    question: 'What does CPU stand for?',
    answers: ['Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit', 'Computer Processing Unit'],
    correctAnswer: 'Central Processing Unit',
  },
  {
    question: 'Which language is used for web apps?',
    answers: ['PHP', 'Python', 'JavaScript', 'All of the above'],
    correctAnswer: 'All of the above',
  },
  {
    question: 'What does HTML stand for?',
    answers: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None of these'],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'Which one is a JavaScript framework?',
    answers: ['Django', 'Flask', 'React', 'Laravel'],
    correctAnswer: 'React',
  },
  {
    question: 'What does RAM stand for?',
    answers: ['Random Access Memory', 'Read Access Memory', 'Run Access Memory', 'Readily Available Memory'],
    correctAnswer: 'Random Access Memory',
  },
  {
    question: 'Which of the following is not a programming language?',
    answers: ['Python', 'Java', 'HTML', 'C++'],
    correctAnswer: 'HTML',
  },
  {
    question: 'Which of the following is a NoSQL database?',
    answers: ['MySQL', 'MongoDB', 'Oracle', 'SQL Server'],
    correctAnswer: 'MongoDB',
  },
  {
    question: 'Which language is primarily used for Android app development?',
    answers: ['JavaScript', 'Kotlin', 'Swift', 'Ruby'],
    correctAnswer: 'Kotlin',
  },
  {
    question: 'Which of the following is a version control system?',
    answers: ['Git', 'Node.js', 'TensorFlow', 'React'],
    correctAnswer: 'Git',
  },
  {
    question: 'Which company developed the C# programming language?',
    answers: ['Apple', 'Google', 'Microsoft', 'Facebook'],
    correctAnswer: 'Microsoft',
  },
  
  {
    question: 'What is the full form of CSS?',
    answers: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
  },
  {
    question: 'Which protocol is used to secure HTTP?',
    answers: ['HTTPS', 'HTTP', 'FTP', 'SFTP'],
    correctAnswer: 'HTTPS',
  },
  {
    question: 'What is the primary purpose of a database?',
    answers: ['To store data', 'To process data', 'To encrypt data', 'To display data'],
    correctAnswer: 'To store data',
  },
  {
    question: 'Which HTML element is used to define a hyperlink?',
    answers: ['<a>', '<link>', '<hyperlink>', '<url>'],
    correctAnswer: '<a>',
  },
  {
    question: 'What does API stand for?',
    answers: ['Application Programming Interface', 'Application Programming Instruction', 'Application Program Interface', 'Application Programming Internet'],
    correctAnswer: 'Application Programming Interface',
  },
  {
    question: 'Which of the following is a JavaScript library for building user interfaces?',
    answers: ['jQuery', 'React', 'Vue', 'Angular'],
    correctAnswer: 'React',
  },
  {
    question: 'What is the default port number for HTTP?',
    answers: ['80', '443', '21', '25'],
    correctAnswer: '80',
  },
  {
    question: 'Which algorithm is used for searching in a sorted array?',
    answers: ['Binary Search', 'Linear Search', 'Hashing', 'Depth-First Search'],
    correctAnswer: 'Binary Search',
  },
  {
    question: 'What is the purpose of a DNS?',
    answers: ['To translate domain names to IP addresses', 'To manage domain names', 'To provide security for domains', 'To store domain-related data'],
    correctAnswer: 'To translate domain names to IP addresses',
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    answers: ['Boolean', 'String', 'Number', 'Character'],
    correctAnswer: 'Character',
  },
  {
    question: 'What does JSON stand for?',
    answers: ['JavaScript Object Notation', 'JavaScript Online Notation', 'JavaScript Object Network', 'JavaScript Object Name'],
    correctAnswer: 'JavaScript Object Notation',
  },
  {
    question: 'What is the purpose of the <div> element in HTML?',
    answers: ['To define a division or section in a document', 'To create a table', 'To display an image', 'To define a form'],
    correctAnswer: 'To define a division or section in a document',
  },
  {
    question: 'What does the acronym CRUD stand for in database management?',
    answers: ['Create, Read, Update, Delete', 'Create, Run, Update, Delete', 'Create, Read, Use, Delete', 'Create, Read, Update, Document'],
    correctAnswer: 'Create, Read, Update, Delete',
  },
  {
    question: 'Which HTML element is used to include a JavaScript file?',
    answers: ['<script>', '<js>', '<include>', '<code>'],
    correctAnswer: '<script>',
  },
  {
    question: 'What is the main purpose of CSS Flexbox?',
    answers: ['To create flexible and responsive layouts', 'To style fonts', 'To create animations', 'To manage colors'],
    correctAnswer: 'To create flexible and responsive layouts',
  },
  {
    question: 'Which method is used to add a new element to the end of an array in JavaScript?',
    answers: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 'push()',
  },
  {
    question: 'What is the primary function of a web server?',
    answers: ['To serve web pages to clients', 'To store data', 'To process user input', 'To manage databases'],
    correctAnswer: 'To serve web pages to clients',
  },
  {
    question: 'Which of the following is a popular JavaScript framework for building mobile apps?',
    answers: ['React Native', 'Node.js', 'jQuery', 'Bootstrap'],
    correctAnswer: 'React Native',
  },
  {
    question: 'What is the purpose of the <form> element in HTML?',
    answers: ['To create an interactive form for user input', 'To define a section of the document', 'To include JavaScript', 'To include external CSS'],
    correctAnswer: 'To create an interactive form for user input',
  },
  {
    question: 'Which of the following is a common method used to fetch data from an API in JavaScript?',
    answers: ['fetch()', 'send()', 'request()', 'get()'],
    correctAnswer: 'fetch()',
  },
  {
    question: 'What does the acronym SQL stand for?',
    answers: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Structured Quality Language'],
    correctAnswer: 'Structured Query Language',
  },
  {
    question: 'What is a responsive web design?',
    answers: ['Design that adapts to different screen sizes and devices', 'Design that uses static layouts', 'Design that is only for mobile devices', 'Design with fixed dimensions'],
    correctAnswer: 'Design that adapts to different screen sizes and devices',
  },
  {
    question: 'Which of the following is a commonly used CSS preprocessor?',
    answers: ['Sass', 'JQuery', 'Bootstrap', 'React'],
    correctAnswer: 'Sass',
  },
  {
    question: 'What is the purpose of the <meta> tag in HTML?',
    answers: ['To provide metadata about the HTML document', 'To create a hyperlink', 'To define a division', 'To style the document'],
    correctAnswer: 'To provide metadata about the HTML document',
  },
  {
    question: 'Which JavaScript keyword is used to declare a variable?',
    answers: ['var', 'let', 'const', 'All of the above'],
    correctAnswer: 'All of the above',
  },
];

const QuizScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  
  useEffect(() => {
    if (route.params?.reset) {
      resetQuiz();
    }
  }, [route.params?.reset]);

  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setScore(0);
  };

  const handleAnswerSelection = (answer) => {
    if (selectedAnswer === null) { 
      const isCorrect = answer === quizQuestions[currentQuestionIndex].correctAnswer;
      setSelectedAnswer(answer);
      if (isCorrect) {
        setCorrectAnswer(answer);
        setScore(prevScore => prevScore + 1);
      } else {
        setCorrectAnswer(quizQuestions[currentQuestionIndex].correctAnswer);
      }

      
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        
        setTimeout(() => {
          if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
            setCorrectAnswer(null);
            fadeAnim.setValue(1); 
          } else {
            
            navigation.navigate('Result', { score, totalQuestions: quizQuestions.length });
          }
        }, 1000); 
      });
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Quiz Challenge</Text>
      <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </Animated.View>
      {currentQuestion.answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            selectedAnswer === answer ? 
              (answer === currentQuestion.correctAnswer ? styles.correctAnswer : styles.incorrectAnswer) 
              : null,
          ]}
          onPress={() => handleAnswerSelection(answer)}
          disabled={selectedAnswer !== null} 
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Question {currentQuestionIndex + 1} of {quizQuestions.length}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e3f2fd', 
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0d47a1', 
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#1976d2', 
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#bbdefb',
    shadowColor: '#1976d2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0d47a1', 
    textAlign: 'center',
    textShadowColor: '#1976d2',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  answerButton: {
    backgroundColor: '#bbdefb',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, 
    shadowColor: '#1976d2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    transform: [{ scale: 1 }], 
    transition: 'transform 0.1s ease-in-out',
  },
  correctAnswer: {
    backgroundColor: '#66bb6a', 
  },
  incorrectAnswer: {
    backgroundColor: '#ef5350', 
  },
  answerText: {
    fontSize: 18,
    color: '#0d47a1', 
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#bbdefb', 
    borderRadius: 10,
    shadowColor: '#1976d2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  footerText: {
    fontSize: 16,
    color: '#0d47a1', 
    textAlign: 'center',
  },
});

export default QuizScreen;
