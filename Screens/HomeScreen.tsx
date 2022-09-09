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

const HomeScreen = (props: any) => {
  const goToSCreen = (screen: string) => {
    console.log(screen);
    Navigation.push(props.componentId, {
      component: {
        name: 'More',
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Home</Text>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
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
