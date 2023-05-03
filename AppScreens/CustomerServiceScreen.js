import React, { Fragment } from 'react'
import { View, Text, Pressable, Linking } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import AppHeader from '../AppHeader/AppHeader'

const CustomerServiceScreen = () => {

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
      <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
        <View style={{ flexGrow: 1 }} />
        <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>Customer Service</Text>
        <View style={{ flexGrow: 1 }} />
      </AppHeader>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 15 }}>
        {data.map((value, index) => (
          <Pressable onPress={value?.navigation} key={index} style={{ flexDirection: 'row', marginTop: 13, paddingHorizontal: 15, alignItems: 'center', height: 55, backgroundColor: '#8ab4f82b', borderRadius: 50 }}>
            {value?.mainicon}
            <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'OpenSans-Bold', paddingLeft: 10 }}>{value?.name}</Text>
            <View style={{ flexGrow: 1 }} />
            {value?.icon}
          </Pressable>
        ))}
      </View>
    </Fragment>
  )
}

export default CustomerServiceScreen;


const data = [
  { id: 1, name: 'Click to call', navigation: () => Linking.openURL(`tel:${9511723507}`), mainicon: <MaterialIcons size={22} name={'add-call'} color={'#000000'} />, icon: <Feather size={25} name={'chevron-right'} color={'#000000'} /> },
  { id: 2, name: 'Click to whatsapp', navigation: () => Linking.openURL(`whatsapp://send?phone=${9511723507}`), mainicon: <FontAwesome size={22} name={'whatsapp'} color={'#000000'} />, icon: <Feather size={25} name={'chevron-right'} color={'#000000'} /> },
  { id: 3, name: 'Click to mail', navigation: () => Linking.openURL('mailto:govindbiswas079@gmail.com'), mainicon: <MaterialIcons size={22} name={'outgoing-mail'} color={'#000000'} />, icon: <Feather size={25} name={'chevron-right'} color={'#000000'} /> },
]