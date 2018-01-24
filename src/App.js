import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import BadgeList from "./badgesList";
import BadgeDetail from "./badgeDetail";

import { StackNavigator } from "react-navigation";

const RootNavigator = StackNavigator(
  {
    BadgeList: {
      screen: BadgeList,
      navigationOptions: {
        headerTitle: "All Badges"
      }
    },
    Badge: {
      screen: BadgeDetail
    }
  },
  {}
);

export default RootNavigator;
