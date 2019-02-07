import React from "react";
import {
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { white, purple } from "../utils/colors";

export default class Decks extends React.Component {
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={Platform.OS === "ios" ? styles.iosBtn : styles.AndroidBtn}
        onPress={() =>
          this.props.navigation.navigate("DeckDetail", {
            deck: item
          })
        }
      >
        <Text style={styles.btnTitle}>{item.title}</Text>
        <Text style={styles.btnText}>Cards: {item.questions.length}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { decks } = this.props.screenProps;

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
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
  iosBtn: {
    backgroundColor: purple,
    padding: 20,
    borderRadius: 7,
    marginBottom: 10,
    marginTop: 10
  },
  AndroidBtn: {
    backgroundColor: purple,
    padding: 20,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  btnTitle: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  btnText: {
    color: white,
    fontSize: 14,
    textAlign: "center"
  }
});
