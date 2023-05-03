import React, { Fragment, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform, Alert, Image, ScrollView, Pressable, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useP } from '@react-navigation/native';
import AppHeader from '../AppHeader/AppHeader'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { useSelector } from 'react-redux';
import { captureRef } from 'react-native-view-shot';
import * as RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { banners } from '../Data'

const UseTemplete = ({ route }) => {
  const viewRef = useRef();
  const Navigation = useNavigation();
  const { TempleteId } = route?.params
  // const { templetData } = useSelector(state => state.reducerSlicer);

  const downloadImage = async () => { // https://dev.to/majiyd/react-native-series-how-to-save-or-share-react-native-component-as-an-image-5gd3
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      RNFS.readFile(uri, "base64")
        .then((base64) => {
          RNFS.writeFile(RNFS.DownloadDirectoryPath + '/image.png', base64, 'base64')
            .then((res) => { console.log("File : ", res) });
        })
    } catch (error) {
      console.log('error', error);
    }
  };

  const shareImage = async () => {
    const uri = await captureRef(viewRef, {
      format: 'png',
      quality: 0.8,
    });

    RNFS.readFile(uri, "base64")
      .then((base64) => {
        let shareOptionsUrl = {
          title: 'My Application',
          message: 'Use my application',
          url: `data:image/png;base64,${base64}`,
          subject: 'Share information from your application'
        };
        Share.open(shareOptionsUrl)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  };

  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
      <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Pressable onPress={() => Navigation.goBack()} style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Feather name={'chevron-left'} color={'#FFFFFF'} size={30} />
          </Pressable>
          <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16, paddingLeft: 5 }}>{banners?.find((item) => item?.id === typeof TempleteId === 'string' ? parseInt(TempleteId) : TempleteId)?.name}</Text>
          <View style={{ flexGrow: 1 }} />
          <Pressable onPress={() => { shareImage() }} style={{ marginRight: 5, height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 20 }}>
            <MaterialIcons name={'share'} color={'#8ab4f8'} size={22} />
          </Pressable>
          <Pressable onPress={() => { downloadImage() }} style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 20 }}>
            <Octicons name={'arrow-down'} color={'#8ab4f8'} size={22} />
          </Pressable>
        </View>
      </AppHeader>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View ref={viewRef} style={{ width: '100%', height: 450, backgroundColor: '#8ab4f8' }}>
            <Image source={{ uri: banners?.find((item) => item?.id === typeof TempleteId === 'string' ? parseInt(TempleteId) : TempleteId)?.image }} resizeMode='stretch' style={{ height: 450, width: '100%' }} />

            <View style={{ position: 'absolute', width: '100%', }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
              </View>
            </View>

            <View style={{ position: 'absolute', backgroundColor: 'red', width: '100%', bottom: 0 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
                <Pressable style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', margin: 3 }}>
                  <Entypo name={'facebook-with-circle'} size={20} color={'#FFFFFF'} />
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default UseTemplete