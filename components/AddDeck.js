import React from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { white, gray } from "../utils/colors";
import TextButton from "../components/TextButton";
import * as API from "../utils/api";

export default class AddDeck extends React.Component {
  state = {
    input: ""
  };

  handleInput = input => {
    this.setState(() => ({
      input: input
    }));
  };

  submit = () => {
    const newDeck = {
      title: this.state.input,
      questions: []
    };

    API.saveDeck(newDeck.title).then(() => {
      this.props.screenProps.update();
      this.props.navigation.navigate("DeckDetail", {
        deck: newDeck
      });
    });

    this.setState(() => ({
      input: ""
    }));
  };

  render() {
    const { input } = this.state;

    return (
      <ScrollView style={styles.container}>
        <TextInput
          value={input}
          placeholder="Deck Name"
          style={styles.input}
          onChangeText={this.handleInput}
        />
        <TextButton onPress={this.submit}>Create Deck</TextButton>
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
