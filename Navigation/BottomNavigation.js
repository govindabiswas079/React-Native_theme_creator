import React, { Fragment, useRef } from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'react-native-paper';
import { HomeScreen, CustomerServiceScreen, AddScreen, SearchScreen, AccountScreen } from '../AppScreens'


const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarInactiveTintColor: '#67748E',
          tabBarActiveTintColor: '#4646F2',
          tabBarStyle: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, paddingBottom: 10, height: 65, backgroundColor: '#FFFFFF', },
          tabBarHideOnKeyboard: true,
          tabBarVisible: true,
          tabBarShowLabel: false,
          safeAreaInset: {
            bottom: "always"
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Feather name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="CustomerServiceScreen"
          component={CustomerServiceScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="customerservice" color={color} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="AddScreen"
          component={AddScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ backgroundColor: focused ? 'green' : 'blue', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 50, elevation: 6 }}>
                <Feather name="plus" color={'#FFFFFF'} size={25} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Feather name="search" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          initialParams={{}}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Account',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Feather name="user" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  )
}

export default BottomNavigation