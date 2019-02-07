import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { gray, purple } from "../utils/colors";
import TabBarIcon from "../components/TabBarIcon";
import Decks from "../components/Decks";
import AddDeck from "../components/AddDeck";
import DeckDetail from "../components/DeckDetail";
import Quiz from "../components/Quiz";
import AddQuestion from "../components/AddQuestion";

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-albums" : "md-albums"}
          />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: purple,
      inactiveTintColor: gray
    }
  }
);

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle;

  if (routeName === "Decks") {
    headerTitle = "Decks";
  } else if (routeName === "AddDeck") {
    headerTitle = "Add Deck";
  }

  return {
    headerTitle
  };
};

export default createStackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  },
  AddQuestion: {
    screen: AddQuestion
  }
});
