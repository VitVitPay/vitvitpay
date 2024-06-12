import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image } from "react-native";
import { navBarStyle } from "./index.jsx";
import Blank from "../components/Blank";
import { Welcome } from "../welcome/welcome";

const Tab = createBottomTabNavigator();

function HomeNavBar({}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconStyle;

          switch (route.name) {
            case "Home":
              iconName = focused
                ? require("../../assets/vvp.home.png")
                : require("../../assets/vvp.home.inactive.png");
              iconStyle = styles.navBarIcon;
              break;
            case "Wallet":
              iconName = focused
                ? require("../../assets/vvp.wallet.png")
                : require("../../assets/vvp.wallet.inactive.png");
              iconStyle = styles.navBarIcon;
              break;
            case "Send":
              iconName = focused
                ? require("../../assets/vitvitpay_logo.1.png")
                : require("../../assets/vvp_send.inactive.png");
              iconStyle = styles.navBarIcon;
              break;
            case "Balance":
              iconName = focused
                ? require("../../assets/vvp.balance.png")
                : require("../../assets/vvp.balance.inactive.png");
              iconStyle = styles.navBarIcon;
              break;
            case "Profile":
              iconName = focused
                ? require("../../assets/vvp.profile.png")
                : require("../../assets/vvp.profile.inactive.png");
              iconStyle = styles.navBarIcon;
              break;
          }

          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={iconName} style={iconStyle} />
              <Text
                style={[
                  styles.navBarText,
                  { color: focused ? "#7D83F4" : "#B0B2FF" },
                ]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarLabel: () => null, // Hide default tab labels
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen name="Home" component={Welcome} />
      <Tab.Screen name="Wallet" component={Blank} />
      <Tab.Screen name="Send" component={Blank} />
      <Tab.Screen name="Balance" component={Blank} />
      <Tab.Screen name="Profile" component={Blank} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7D83F4",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  navBarIcon: {
    width: 25,
    height: 25,
  },
  navBarText: {
    fontSize: 12,
  },
});

module.exports = {
  HomeNavBar,
};
