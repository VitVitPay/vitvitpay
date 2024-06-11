import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
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

          switch (route.name) {
            case "Home":
              iconName = focused
                ? require("../../assets/vvp.home.png")
                : require("../../assets/vvp.home.inactive.png");
              break;
            case "Wallet":
              iconName = focused
                ? require("../../assets/vvp.wallet.png")
                : require("../../assets/vvp.wallet.inactive.png");
              break;
            case "Send":
              iconName = focused
                ? require("../../assets/vitvitpay_logo.1.png")
                : require("../../assets/vitvitpay_logo.1.png");
              break;
            case "Balance":
              iconName = focused
                ? require("../../assets/vvp.balance.png")
                : require("../../assets/vvp.balance.inactive.png");
              break;
            case "Profile":
              iconName = focused
                ? require("../../assets/vvp.profile.png")
                : require("../../assets/vvp.profile.inactive.png");
              break;
          }

          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={iconName}
                style={[
                  styles.navBarIcon,
                  { tintColor: focused ? "#7D83F4" : "#B0B2FF" },
                ]}
              />
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
          boxShadow: "0px 10px 4px rgba(125, 131, 244, 0.25)",
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
  navBarIcon: {
    width: 25,
    height: 25,
  },
  navBarText: {
    fontSize: 20,
  },
});
module.exports = {
  HomeNavBar,
};

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StyleSheet, View, Text, Image } from "react-native";
// import { navBarStyle } from "./index.jsx";
// import Blank from "../components/Blank";
// import { Welcome } from "../welcome/welcome";

// function HomeNavBar({}) {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           let iconName;

//           switch (route.name) {
//             case "Home":
//               iconName = focused
//                 ? require("../../assets/vvp.home.png")
//                 : require("../../assets/vvp.home.inactive.png");
//               break;
//             case "Wallet":
//               iconName = focused
//                 ? require("../../assets/vvp.wallet.png")
//                 : require("../../assets/vvp.wallet.inactive.png");
//               break;
//             case "Send":
//               iconName = focused
//                 ? require("../../assets/vitvitpay_logo.1.png")
//                 : require("../../assets/vitvitpay_logo.1.png");
//               break;
//             case "Balance":
//               iconName = focused
//                 ? require("../../assets/vvp.balance.png")
//                 : require("../../assets/vvp.balance.inactive.png");
//               break;
//             case "Profile":
//               iconName = focused
//                 ? require("../../assets/vvp.profile.png")
//                 : require("../../assets/vvp.profile.inactive.png");
//               break;
//           }

//           return (
//             <View style={{ alignItems: "center", justifyContent: "center" }}>
//               <Image
//                 source={iconName}
//                 style={[
//                   navBarStyle.navBarIcon,
//                   { tintColor: focused ? "#7D83F4" : "#B0B2FF" },
//                 ]}
//               />
//               <Text
//                 style={[
//                   navBarStyle.navBarText,
//                   { color: focused ? "#7D83F4" : "#B0B2FF" },
//                 ]}
//               >
//                 {route.name}
//               </Text>
//             </View>
//           );
//         },
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
//       })}
//     >
//       <Tab.Screen name="Home" component={Welcome} />
//       <Tab.Screen name="Wallet" component={Blank} />
//       <Tab.Screen name="Send" component={Blank} />
//       <Tab.Screen name="Balance" component={Blank} />
//       <Tab.Screen name="Profile" component={Blank} />
//     </Tab.Navigator>
//   );
// }

// return (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarStyle: {
//         position: "absolute",
//         bottom: 20,
//         left: 20,
//         right: 20,
//         elevation: 0,
//         backgroundColor: "#fff",
//         borderRadius: 15,
//         height: 70,
//         ...styles.shadow,
//       },
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={Welcome}
//       options={{
//         tabBarIcon: ({ focused }) => {
//           <View>
//             <Image source={require("../../assets/vvp.home.inactive.png")} />
//             <Text></Text>
//           </View>;
//         },
//       }}
//     />
//     <Tab.Screen name="Wallet" component={Blank} />
//     <Tab.Screen name="Send" component={Blank} />
//     <Tab.Screen name="Balance" component={Blank} />
//     <Tab.Screen name="Profile" component={Blank} />
//   </Tab.Navigator>
// );
