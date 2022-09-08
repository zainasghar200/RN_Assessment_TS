import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MoreScreen from '../Screens/MoreScreen';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'Red' : 'Green',
              }}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/menu.png')}
              style={{
                width: 25,
                height: 25,
              }}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
