import {Store} from 'redux';
import {Provider} from 'react-redux';
import React, {FunctionComponent} from 'react';
import {NavigationProvider} from 'react-native-navigation-hooks';

export const appProvider = (
  ComponentId: string,
  Component: FunctionComponent,
  store: Store,
) => {
  return (props: any) => {
    return (
      <Provider store={store}>
        <NavigationProvider value={{componentId: ComponentId}}>
          <Component {...props} />
        </NavigationProvider>
      </Provider>
    );
  };
};
