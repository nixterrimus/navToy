import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";

import BadgeList from "./src/badgesList";
import BadgeDetail from "./src/badgeDetail";

const badges = require("./badges.json");
const badgeList = badges.map(item => ({
  ...item,
  key: item.name
}));

const categories = require("./categories.json");

Navigation.registerComponent("badgeList", () => BadgeList);
Navigation.registerComponent("badgeDetail", () => BadgeDetail);

Navigation.startSingleScreenApp({
  screen: {
    screen: "badgeList",
    title: "All badges",
    navigatorStyle: {},
    navigatorButtons: {}
  },
  // This data becomes available to all screens as props
  passProps: {
    badgeList: badgeList,
    categories: categories
  }
});

AppRegistry.registerComponent("badgesToy", () => App);
