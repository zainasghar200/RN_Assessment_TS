import {Navigation} from 'react-native-navigation';
import AddScreen from './Screens/AddScreen';
import HomeScreen from './Screens/HomeScreen';
import ModalScreen from './Screens/ModalScreen';
import MoreScreen from './Screens/MoreScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('More', () => MoreScreen);
Navigation.registerComponent('Modal', () => ModalScreen);
Navigation.registerComponent('Add', () => AddScreen);
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});
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
