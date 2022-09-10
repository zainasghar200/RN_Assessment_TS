import {Navigation} from 'react-native-navigation';
import AddScreen from './Screens/AddScreen';
import HomeScreen from './Screens/HomeScreen';
import ModalScreen from './Screens/ModalScreen';
import MoreScreen from './Screens/MoreScreen';
import {store} from './src/redux/store';
import {appProvider} from './services/navigation/provider';

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
