import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './assets/components/Styles';
import Game from './assets/components/Game'

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

