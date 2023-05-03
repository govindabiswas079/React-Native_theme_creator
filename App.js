import React, { useEffect } from 'react'
import { StatusBar, View, ActivityIndicator, useColorScheme } from 'react-native';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store'
import CombineRoute from './CombineRoute'
import deepLinking from './deepLinking'
import messaging from '@react-native-firebase/messaging';

const App = () => {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      GetFcmToken()
    }
  }

  const GetFcmToken = async () => {
    try {
      const token = await messaging().getToken()
      if (token) {
        console.log(token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const NotificationListernar = async () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM message arrived 101!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'App Open By Clicking Notification',
        remoteMessage.notification,
      );
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
        }
      });

    return unsubscribe;
  }

  useEffect(() => {
    requestUserPermission();
    NotificationListernar();
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer linking={deepLinking} fallback={
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle='dark-content' backgroundColor={'#FFFFFF'} />
            <ActivityIndicator size={'large'} color={'#F25555'} />
          </View>
        }>
          <CombineRoute />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App