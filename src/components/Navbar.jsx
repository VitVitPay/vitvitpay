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
                : require("../../assets/vitvitpay_logo.1.png");
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

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StyleSheet, View } from "react-native";
// import { navBarStyle } from "./index.jsx";
// import Blank from "../components/Blank";
// import { Welcome } from "../welcome/welcome";

// const Tab = createBottomTabNavigator();

// function HomeNavBar({}) {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           position: "absolute",
//           bottom: 20,
//           left: 20,
//           right: 20,
//           elevation: 0,
//           backgroundColor: "#fff",
//           borderRadius: 15,
//           height: 70,
//           ...styles.shadow,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Welcome}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             <View>
//               <Image source={require("../../assets/vvp.home.inactive.png")} />
//               <Text>Home</Text>
//             </View>;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Wallet"
//         component={Blank}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             <View>
//               <Image source={require("../../assets/vvp.wallet.inactive.png")} />
//               <Text>Wallet</Text>
//             </View>;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Send"
//         component={Blank}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             <View>
//               <Image source={require("../../assets/vitvitpay_logo.1.png")} />
//               <Text>Send</Text>
//             </View>;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Balance"
//         component={Blank}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             <View>
//               <Image
//                 source={require("../../assets/vvp.balance.inactive.png")}
//               />
//               <Text>Balance</Text>
//             </View>;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Blank}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             <View>
//               <Image
//                 source={require("../../assets/vvp.profile.inactive.png")}
//               />
//               <Text>Profile</Text>
//             </View>;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: "#7D83F4",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   navBarIcon: {
//     width: 25,
//     height: 25,
//     tintColor: focused ? "#7D83F4" : "#B0B2FF",
//   },
//   navBarText: {
//     color: focused ? "#7D83F4" : "#B0B2FF",
//     fontSize: 20,
//   },
// });

// module.exports = {
//   HomeNavBar,
// };
