import {Navigation} from 'react-native-navigation';
import AddScreen from './src/Screens/AddScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ModalScreen from './src/Screens/ModalScreen';
import MoreScreen from './src/Screens/MoreScreen';
import {appProvider} from './src/services/navigation/provider';
import store from './src/redux/store';
import {
  ADD_SCREEN,
  HOME_SCREEN,
  MODAL_SCREEN,
  MORE_SCREEN,
} from './src/services/constants';

Navigation.registerComponent(
  MODAL_SCREEN,
  () => appProvider(MODAL_SCREEN, ModalScreen, store),
  () => ModalScreen,
);
Navigation.registerComponent(
  ADD_SCREEN,
  () => appProvider(ADD_SCREEN, AddScreen, store),
  () => AddScreen,
);
Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
Navigation.registerComponent(MORE_SCREEN, () => MoreScreen);

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
                  icon: require('./src/assets/icons/home.png'),
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
                  icon: require('./src/assets/icons/menu.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
});
