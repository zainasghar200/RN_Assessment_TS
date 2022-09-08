import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const MoreScreen = () => {
  return <Text style={styles.container}>MoreScreen</Text>;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default MoreScreen;
