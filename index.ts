import {Navigation} from 'react-native-navigation';
import HomeScreen from './Screens/HomeScreen';
import MoreScreen from './Screens/MoreScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('More', () => MoreScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
