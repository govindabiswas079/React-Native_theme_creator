import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import AppHeader from '../AppHeader/AppHeader'

const SearchScreen = () => {
  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
          <View style={{ flexGrow: 1 }} />
          <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>Search</Text>
          <View style={{ flexGrow: 1 }} />
        </AppHeader>
        <Text>HomeScreen</Text>
      </View>
    </Fragment>
  )
}

export default SearchScreen