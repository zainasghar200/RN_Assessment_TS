import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Image
        source={require('../assets/icons/home.png')}
        style={{
          width: 25,
          height: 25,
        }}></Image>
      <Text style={styles.container}>HomeScreen</Text>
      <Text style={styles.container}>HomeScreen</Text>
    </View>
  );
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

export default HomeScreen;
