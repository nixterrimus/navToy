import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, NavigatorIOS } from "react-native";

import BadgeList from "./badgesList";
import BadgeDetail from "./badgeDetail";

export default class NavigatorIOSApp extends Component {
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
      categories: categories
    };
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: BadgeList,
          title: "All Badges",
          passProps: {
            badgeList: this.state.badgeList,
            categories: this.state.categories,
            onNavigateToBadge: badgeName => {
              const badge = this.state.badgeList.filter(
                badge => badge.key === badgeName
              )[0];

              this.navigator.push({
                component: BadgeDetail,
                title: "Badge",
                passProps: {
                  badgeUrl: badge.icons.large,
                  description: badge.safe_extended_description,
                  title: badge.translated_description,
                  onBack: () => {}
                }
              });
            }
          }
        }}
        ref={navigator => (this.navigator = navigator)}
        style={{ flex: 1 }}
      />
    );
  }
}
