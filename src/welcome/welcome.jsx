import React from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router"; // Assuming you are using expo-router for navigation
import title from "../../assets/splash.png"; // Ensure this is the correct path

export function Welcome() {
  return (
    <View style={styles.welcome}>
      <Image style={styles.image} source={title} alt="Vit Vit pay title logo" />
      <Link href="/signup" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </Link>
      <Link href="/login" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0B2FF", // Background color if needed
    padding: "20px",
    width: "100%",
    height: "100%",
  },
  image: {
    width: 100, // Use explicit values for testing
    height: 100,
    borderColor: "red", // Add a border to see the image's position
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#F5F5FF",
    padding: 16,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#7D83F4",
    textAlign: "center",
  },
});

export default Welcome;
