import { AppRegistry } from "react-native";
import * as Navigation from "react-native-navigation";

import BadgeList from "./src/badgesList";
import BadgeDetail from "./src/badgeDetail";

const badges = require("./badges.json");
const badgeList = badges.map(item => ({
  ...item,
  key: item.name
}));

const categories = require("./categories.json");

Navigation.default.registerComponent("BadgeList", () => BadgeList);
Navigation.default.registerComponent("BadgeDetail", () => BadgeDetail);

Navigation.default.events().onAppLaunched(() => {
  Navigation.default.setRoot({
    stack: {
      children: [
        {
          component: {
            name: "BadgeList",
            passProps: {
              badgeList: badgeList,
              categories: categories
            },
            options: {
              topBar: {
                title: "All badges"
              }
            }
          }
        }
      ]
    }
  });
});
