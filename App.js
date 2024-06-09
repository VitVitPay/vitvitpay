import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/welcome/welcome'
import { HomeNavBar  } from './src/components/Navbar'

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavBar></HomeNavBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
