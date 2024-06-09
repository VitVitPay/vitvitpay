// Main screen: Available balance, History, Additional information, ect.
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router"; // Assuming you are using expo-router for navigation

export function Welcome() {
  return (
    <View style={styles.home}>
      <Text>Available Balance</Text>
      {/* display vvp balance numerical value*/}
      {/* display various coin balance numerical values*/}
      <Text>History</Text>
      {/* display vvp transactions*/}
    </View>
  );
}
