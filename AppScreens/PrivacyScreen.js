import React, { Fragment } from 'react'
import { View, Text, Pressable } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import AppHeader from '../AppHeader/AppHeader'
import { useNavigation } from '@react-navigation/native'

const PrivacyScreen = () => {
  const Navigation = useNavigation();

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
      <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Pressable onPress={() => Navigation.goBack()} style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name={'chevron-left'} color={'#FFFFFF'} size={30} />
          </Pressable>
          <View style={{ flexGrow: 1 }} />
          <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>Privacy Policy</Text>
          <View style={{ flexGrow: 1 }} />
          <Pressable style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>

          </Pressable>
        </View>
      </AppHeader>
    </Fragment>
  )
}

export default PrivacyScreen