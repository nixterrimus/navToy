import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { BadgeList } from "../badgesList/index";

class BadgeDetail extends Component {
  render() {
    const { badgeUrl, title, description, onBack } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 8
          }}
        >
          <TouchableOpacity onPress={onBack}>
            <Image
              source={require("../../right.png")}
              style={{
                width: 22,
                height: 22,
                transform: [{ rotateZ: "180deg" }]
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 40
          }}
        >
          <Image
            source={{
              uri: badgeUrl
            }}
            style={{
              width: 250,
              height: 250,
              shadowOpacity: 0.4,
              shadowOffset: {
                height: 2,
                width: 0
              },
              borderWidth: 14,
              borderRadius: 125,
              borderColor: "white",
              shadowColor: "blue",
              shadowRadius: 22,
              overflow: "visible",
              backgroundColor: "rgb(240,240,240)"
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            backgroundColor: "#E9ECF2",
            minHeight: 140,
            paddingTop: 12,
            flex: 1
          }}
        >
          <Text
            style={{
              fontSize: 28,
              marginBottom: 4,
              fontWeight: "800"
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 16
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    );
  }
}

const badges = require("../../badges.json");
const badgeList = badges.map(item => ({
  ...item,
  key: item.name
}));

export default class BadgeDataFromNavigation extends Component {
  render() {
    const badgeName = this.props.navigation.state.params.name;
    const badge = badgeList.filter(badge => badge.key === badgeName)[0];

    return (
      <BadgeDetail
        badgeUrl={badge.icons.large}
        title={badge.translated_description}
        description={badge.safe_extended_description}
        onBack={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}
