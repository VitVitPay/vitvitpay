import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { navBarStyle } from "./index.jsx";
import Blank from "../components/Blank";
import { Welcome } from "../welcome/welcome";

const Tab = createBottomTabNavigator();

function HomeNavBar({}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Welcome}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <Image source={require("../../assets/vvp.home.inactive.png")} />
              <Text></Text>
            </View>;
          },
        }}
      />
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
});
module.exports = {
  HomeNavBar,
};
