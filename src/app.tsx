import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import firebase from 'firebase';
import config from './firebase/config';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './router';

/**
 * The root app component.
 *
 * @constructor
 */
export default function App(): React.ReactElement {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <Provider store={store}>
        <ConfigProvider>
          <AdaptivityProvider>
            <Router />
          </AdaptivityProvider>
        </ConfigProvider>
      </Provider>
    </FirebaseDatabaseProvider>
  );
}
