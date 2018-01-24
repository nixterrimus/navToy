import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import * as Navigation from "react-native-navigation";

class BadgeItem extends Component {
  render() {
    const { title, subtitle, iconUrl, onPressRow } = this.props;
    return (
      <TouchableHighlight
        underlayColor="rgba(80,80,80,0.3)"
        onPress={onPressRow}
      >
        <View
          style={{
            marginLeft: 12,
            paddingRight: 12,
            paddingVertical: 6,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "rgb(200,200,200)",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={{
              uri: iconUrl
            }}
            style={{
              width: 40,
              height: 40,
              marginRight: 12
            }}
          />
          <View
            style={{
              flex: 1
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                marginBottom: 2
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "rgb(100,100,100)"
              }}
            >
              {subtitle}
            </Text>
          </View>
          <View>
            <Image
              source={require("../../right.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: "rgb(150,150,150)"
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export class BadgeList extends Component {
  categoryName(categories, categoryId) {
    return categories.filter(category => category.category == categoryId)[0]
      .type_label;
  }

  render() {
    const { badgeList, categories, onNavigateToBadge } = this.props;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          data={badgeList}
          renderItem={({ item }) => (
            <BadgeItem
              title={item.description}
              subtitle={this.categoryName(categories, item.badge_category)}
              iconUrl={item.icons.small}
              onPressRow={() => onNavigateToBadge(item.name)}
            />
          )}
        />
      </View>
    );
  }
}

export default class NavigateableBadgeList extends Component {
  render() {
    return (
      <BadgeList
        {...this.props}
        onNavigateToBadge={badgeName => {
          const badge = this.props.badgeList.filter(
            badge => badge.key === badgeName
          )[0];

          Navigation.default.push(this.props.componentId, {
            component: {
              name: "BadgeDetail",
              passProps: {
                badgeUrl: badge.icons.large,
                description: badge.safe_extended_description,
                title: badge.translated_description
              },
              options: {
                topBar: {
                  title: badge.translated_description
                }
              }
            }
          });
        }}
      />
    );
  }
}
