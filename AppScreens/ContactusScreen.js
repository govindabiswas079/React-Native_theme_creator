import React, { Fragment } from 'react'
import { View, Text, Pressable, Image, Linking } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' // add-call
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' // web // email-open
import { useNavigation } from '@react-navigation/native'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import AppHeader from '../AppHeader/AppHeader'
import { contactusImage } from '../assets/image'
import { ScrollView } from 'react-native'

const ContactusScreen = () => {
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
          <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>Contact Us</Text>
          <View style={{ flexGrow: 1 }} />
          <Pressable style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          </Pressable>
        </View>
      </AppHeader>

      <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: 250, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image resizeMode='contain' source={contactusImage} style={{ height: 250, width: '100%' }} />
          </View>

          <View style={{ marginTop: 20 }}>
            {data?.map((value, index) => (
              <Pressable onPress={value?.action} key={index} style={{ borderRadius: 10, backgroundColor: '#FFFFFF', elevation: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15, paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
                <View>
                  <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{value?.name}</Text>
                  <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'OpenSans-SemiBold' }}>{value?.value}</Text>
                </View>
                <View style={{ width: 45, height: 45, justifyContent: 'center', alignItems: 'center', elevation: 2, borderRadius: 50, backgroundColor: '#FFFFFF' }}>
                  {value?.icon}
                </View>

              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default ContactusScreen;

const data = [
  { id: 1, name: 'Call Us', value: '+91 9511723507', icon: <MaterialIcons name={"add-call"} color={'#000000'} size={25} />, action: () => { Linking.openURL(`tel:${9511723507}`) } },
  { id: 2, name: 'Email', value: 'govindbiswas079@gmail.com', icon: <MaterialCommunityIcons name={"email-open"} color={'#000000'} size={25} />, action: () => { Linking.openURL('mailto:govindbiswas079@gmail.com') } },
  { id: 3, name: 'Website', value: 'www.prembiswas.com', icon: <MaterialCommunityIcons name={"web"} color={'#000000'} size={25} />, action: () => { Linking.openURL('https://prembiswas.com') } },
]