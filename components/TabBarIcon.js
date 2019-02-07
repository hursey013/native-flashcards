import React from "react";
import { Icon } from "expo";
import { gray, purple } from "../utils/colors";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? purple : gray}
      />
    );
  }
}
