import React from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router"; // Assuming you are using expo-router for navigation

export function Welcome() {
  return (
    <View style={styles.welcome}>
      <Image
        source={require("../../assets/vvp.trio.coin.png")}
        // style={styles.image}
        style={{ width: 300, height: 300 }}
      />
      <Link href="/signup" asChild>
        <Pressable style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </Pressable>
      </Link>
      <Link href="/login" asChild>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0B2FF", // Background color if needed
    padding: 20,
    width: "100%",
    height: "100%",
  },
  //   image: {
  //     width: "300px", // Use explicit values for testing
  //     height: "300px",
  //     borderColor: "#000", // Add a border to see the image's position
  //     borderWidth: 1,
  //     accessibilityLabel: "Vit Vit pay title logo",
  //   },
  signupButton: {
    backgroundColor: "#4F46CC",
    padding: 16,
    borderRadius: 30,
    marginVertical: 10,
    width: "40%",
  },
  loginButton: {
    backgroundColor: "#7D83F4",
    padding: 16,
    borderRadius: 30,
    marginVertical: 10,
    width: "40%",
  },
  signupText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#E7E8FE",
    textAlign: "center",
  },
  loginText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#E7E8FE",
    textAlign: "center",
  },
});

export default Welcome;
