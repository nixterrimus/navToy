import React, { Component } from "react";
import { Platform, StyleSheet, Image, Text, View } from "react-native";

export default class BadgeDetail extends Component {
  render() {
    const { badgeUrl, title, description } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
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
