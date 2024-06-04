import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import { Welcome } from './src/welcome/welcome';
import config from './auth0-configuration';

const App = () => {
  return (
      <Welcome />
  );
};

export default App;