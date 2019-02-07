import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { NavigationActions } from "react-navigation";
import { white, gray, purple } from "../utils/colors";
import TextButton from "../components/TextButton";

export default class Quiz extends Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    questions: this.props.navigation.state.params.questions,
    qID: 0,
    showAnswer: false,
    correct: 0
  };

  showAnswer = () => {
    this.setState({
      showAnswer: true
    });
  };

  correctAnswer = () => {
    this.setState(prevState => ({
      qID: prevState.qID + 1,
      showAnswer: false,
      correct: prevState.correct + 1
    }));
  };

  incorrectAnswer = () => {
    this.setState(prevState => ({
      qID: prevState.qID + 1,
      showAnswer: false
    }));
  };

  restartQuiz = () => {
    this.setState({
      qID: 0,
      showAnswer: false,
      correct: 0
    });
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { questions, qID, showAnswer, correct } = this.state;

    if (qID === questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.title}>All done!</Text>
            <Text style={styles.text}>
              Score: {correct}/{questions.length}
            </Text>
            <TextButton onPress={this.restartQuiz}>Restart Quiz</TextButton>
            <TextButton onPress={this.goBack}>Back to Deck</TextButton>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {showAnswer ? (
          <View style={styles.center}>
            <Text style={styles.text}>{questions[qID].answer}</Text>
            <TextButton onPress={this.correctAnswer}>Correct</TextButton>
            <TextButton onPress={this.incorrectAnswer}>Incorrect</TextButton>
          </View>
        ) : (
          <View style={styles.center}>
            <Text style={styles.text}>
              Question {qID + 1} of {questions.length}
            </Text>
            <Text style={styles.text}>{questions[qID].question}</Text>
            <TextButton onPress={this.showAnswer}>Show Answer</TextButton>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: white
  },
  title: {
    color: gray,
    fontSize: 36,
    textAlign: "center"
  },
  text: {
    color: gray,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
