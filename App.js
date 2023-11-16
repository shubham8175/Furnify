import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTabNavigator from './Navigation/BottomTabNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <BottomTabNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
