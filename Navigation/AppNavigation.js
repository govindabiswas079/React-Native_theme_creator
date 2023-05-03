import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation'
import { forSlideAnimate, configAnimate } from './NavigationAnimate';
import {
  UseTemplete,
  FeedbackScreen,
  ContactusScreen,
  AboutusScreen,
  PrivacyScreen,
  ProfileScreen,
} from '../AppScreens'

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
        <Stack.Screen name='Root' component={BottomNavigation} />
        <Stack.Screen name='UseTemplete' component={UseTemplete} />
        <Stack.Screen name='FeedbackScreen' component={FeedbackScreen} />
        <Stack.Screen name='ContactusScreen' component={ContactusScreen} />
        <Stack.Screen name='AboutusScreen' component={AboutusScreen} />
        <Stack.Screen name='PrivacyScreen' component={PrivacyScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default AppNavigation