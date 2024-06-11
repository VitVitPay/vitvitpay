import { StyleSheet } from "react-native";

const formButtonStyle = StyleSheet.create({
  darkPurpleButton: {
    backgroundColor: "#4F46CC",
    padding: 16,
    borderRadius: 30,
    marginVertical: 10,
    width: "40%",
  },
  fadedPurpleButton: {
    backgroundColor: "#7D83F4",
    padding: 16,
    borderRadius: 30,
    marginVertical: 10,
    width: "40%",
  },
  darkPurpleButtonText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#E7E8FE",
    textAlign: "center",
  },
  fadedPurpleButtonText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#E7E8FE",
    textAlign: "center",
  },
});
const navBarStyle = StyleSheet.create({
  navBarIcon: {
    width: 25,
    height: 25,
  },
  navBarText: {
    // color: focused ? "#7D83F4" : "#B0B2FF",
    fontSize: 20,
  },
});

module.exports = {
  formButtonStyle,
  navBarStyle,
};
