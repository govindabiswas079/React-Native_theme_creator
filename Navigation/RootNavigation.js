import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen, RegisterScreen, OtpVerifyScreen } from '../RootScreens'
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator();
const RootNavigation = () => {

  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, }}>
        <Stack.Screen name='LoginScreen' component={LogInScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='OtpVerifyScreen' component={OtpVerifyScreen} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default RootNavigation