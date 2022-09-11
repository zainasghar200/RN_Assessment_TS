import {Store} from 'redux';
import {Provider} from 'react-redux';
import React, {FunctionComponent} from 'react';
import {NavigationProvider} from 'react-native-navigation-hooks';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '../../redux/store';
export const appProvider = (
  ComponentId: string,
  Component: FunctionComponent,
  store: Store,
) => {
  return (props: any) => {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <Component {...props} />
          </NavigationProvider>
        </PersistGate>
      </Provider>
    );
  };
};
