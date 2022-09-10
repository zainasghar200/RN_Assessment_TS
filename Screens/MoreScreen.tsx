import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';

const MoreScreen = (props: any) => {
  const showModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Modal',
              options: {
                topBar: {
                  title: {
                    text: 'My Modal',
                  },
                },
              },
            },
          },
        ],
      },
    });
  };
  return (
    <View style={styles.container}>
      <Button title="More Options" onPress={() => showModal()} />
    </View>
  );
};
MoreScreen.options = {
  topBar: {
    visible: false,
  },
  bottomTab: {
    text: 'More',
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

export default MoreScreen;
