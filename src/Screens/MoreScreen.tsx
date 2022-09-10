import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Pressable,
  Dimensions,
} from 'react-native';
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
      <Pressable style={styles.button} onPress={() => showModal()}>
        <Text style={styles.text}>Open Model</Text>
      </Pressable>
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    padding: 16,
    marginTop: 24,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0A45EF',
  },

  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default MoreScreen;
