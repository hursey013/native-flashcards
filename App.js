import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { Constants } from "expo";
import { white } from "./utils/colors";
import * as API from "./utils/api";
import { setLocalNotification } from "./utils/notifications";

export default class App extends React.Component {
  state = {
    decks: []
  };

  componentDidMount() {
    setLocalNotification();
    this.update();
  }

  update = () => {
    API.getDecks().then(decks => {
      this.setState({ decks });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && (
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar barStyle="default" />
          </View>
        )}
        <AppNavigator
          screenProps={{ decks: this.state.decks, update: this.update }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});
