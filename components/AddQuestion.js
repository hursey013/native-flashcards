import React from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { white, gray } from "../utils/colors";
import TextButton from "../components/TextButton";
import * as API from "../utils/api";

export default class AddQuestion extends React.Component {
  static navigationOptions = {
    title: "Add Question"
  };

  state = {
    question: "",
    answer: ""
  };

  handleQuestionInput = input => {
    this.setState(() => ({
      question: input
    }));
  };

  handleAnswerInput = input => {
    this.setState(() => ({
      answer: input
    }));
  };

  submit = () => {
    const question = this.state;
    const { title } = this.props.navigation.state.params.deck;

    API.addCardToDeck(title, question).then(result => {
      this.props.screenProps.update();
      this.props.navigation.navigate("DeckDetail", {
        deck: result
      });
    });

    this.setState(() => ({
      question: "",
      answer: ""
    }));
  };

  render() {
    const { question, answer } = this.state;

    return (
      <ScrollView style={styles.container}>
        <TextInput
          value={question}
          placeholder="Question"
          style={styles.input}
          onChangeText={this.handleQuestionInput}
        />
        <TextInput
          value={answer}
          placeholder="Answer"
          style={styles.input}
          onChangeText={this.handleAnswerInput}
        />
        <TextButton onPress={this.submit}>Add Question</TextButton>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: white
  },
  input: {
    height: 40,
    backgroundColor: white,
    color: gray,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 5,
    padding: 10
  }
});
