import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, gray } from "../utils/colors";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";
import TextButton from "../components/TextButton";

export default class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: `${deck.title}`
    };
  };

  addQuestion = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate("AddQuestion", {
      deck: deck
    });
  };

  startQuiz = () => {
    const { questions } = this.props.navigation.state.params.deck;

    clearLocalNotification().then(setLocalNotification);

    this.props.navigation.navigate("Quiz", {
      questions: questions
    });
  };

  render() {
    const { questions, title } = this.props.navigation.state.params.deck;
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>Cards: {questions.length}</Text>
          <TextButton onPress={this.startQuiz}>Start Quiz</TextButton>
          <TextButton onPress={this.addQuestion}>Add Question</TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  },
  title: {
    color: gray,
    fontSize: 36,
    textAlign: "center"
  },
  text: {
    color: gray,
    fontSize: 22,
    textAlign: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  }
});
