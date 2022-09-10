import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {useSelector} from 'react-redux';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Home</Text>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    visible: false,
  },
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
