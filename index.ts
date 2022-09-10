import {Navigation} from 'react-native-navigation';
import AddScreen from './src/Screens/AddScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ModalScreen from './src/Screens/ModalScreen';
import MoreScreen from './src/Screens/MoreScreen';
import {appProvider} from './services/navigation/provider';
import store from './src/redux/store';

Navigation.registerComponent('Modal', () =>
  appProvider('Modal', ModalScreen, store),
);
Navigation.registerComponent('Add', () => appProvider('Add', AddScreen, store));
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('More', () => MoreScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabs',
        children: [
          {
            stack: {
              id: 'HomeTab',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: 'Home',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/icons/home.png'),
                },
              },
            },
          },
          {
            stack: {
              id: 'MoreTab',
              children: [
                {
                  component: {
                    id: 'MORE_SCREEN',
                    name: 'More',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./assets/icons/menu.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
});
