import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import BadgeList from "./badgesList";
import BadgeDetail from "./badgeDetail";

export default class App extends Component {
  constructor(props) {
    super(props);

    const badges = require("../badges.json");
    const badgeList = badges.map(item => ({
      ...item,
      key: item.name
    }));

    const categories = require("../categories.json");

    this.state = {
      badgeList: badgeList,
      categories: categories,
      selectedBadge: null
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 22
        }}
      >
        {this.renderScene(this.state)}
      </View>
    );
  }

  renderScene(state) {
    if (state.selectedBadge) {
      return (
        <BadgeDetail
          badgeUrl={state.selectedBadge.badgeUrl}
          title={state.selectedBadge.title}
          description={state.selectedBadge.description}
          onBack={() => {
            this.setState({ selectedBadge: null });
          }}
        />
      );
    } else {
      return (
        <BadgeList
          badgeList={this.state.badgeList}
          categories={this.state.categories}
          onNavigateToBadge={badgeName => {
            const badge = this.state.badgeList.filter(
              badge => badge.key === badgeName
            )[0];
            this.setState({
              selectedBadge: {
                title: badge.translated_description,
                description: badge.safe_extended_description,
                badgeUrl: badge.icons.large
              }
            });
          }}
        />
      );
    }
  }
}
