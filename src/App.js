import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import BadgeList from "./badgesList";
import BadgeDetail from "./badgeDetail";

const badges = require("../badges.json");
const badgeList = badges.map(item => ({
  ...item,
  key: item.name
}));

const categories = require("../categories.json");

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 22
        }}
      >
        {/* <BadgeDetail
          badgeUrl="https://cdn.kastatic.org/images/badges/moon/fact-checker-512x512.png"
          title="Fact Checker"
          description="Have a video clarification officially accepted"
        /> */}

        <BadgeList
          badgeList={badgeList}
          categories={categories}
          onNavigateToBadge={badgeName => {
            alert(`Visit ${badgeName}`);
          }}
        />
      </View>
    );
  }
}
