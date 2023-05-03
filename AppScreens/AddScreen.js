/* import React, { Fragment } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import AppHeader from '../AppHeader/AppHeader'
import { DragResizeBlock } from 'react-native-drag-resize'
import { RadhaKrishna } from '../assets/image'

const AddScreen = ({  }) => {
  
  return (
    <Fragment>
    <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
    <View style={{ flexGrow: 1 }} />
    <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>New</Text>
    <View style={{ flexGrow: 1 }} />
    </AppHeader>

        <View style={{ width: '100%', height: 430, backgroundColor: "blue" }} >
        <DragResizeBlock isDisabled={false} isDraggable={true} isResizable={true} onResize={(e) => console.log(e)} x={0} y={0} limitation={{ x: 0, y: 0, h: 430, w: Dimensions.get('window').width }} >
        <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
        <Image source={RadhaKrishna} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
        </View>
        </DragResizeBlock>
        </View>
        </View>
        </Fragment>
        )
      }
      AddScreen.defaultProps = {
        
      }
      
      
      export default AddScreen */



import React, { useState, Fragment, useRef } from 'react'
import DocumentPicker, { DirectoryPickerResponse, DocumentPickerResponse, isInProgress, types, } from 'react-native-document-picker'
import { Image, ToastAndroid, PermissionsAndroid, View, Text, Button, Pressable, Dimensions } from 'react-native';
import { CarIcon, BikeIcon, TruckIcon, } from '../assets/image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DragResizeBlock } from 'react-native-drag-resize'
import { captureRef } from 'react-native-view-shot';
import * as RNFS from 'react-native-fs';

const AddScreen = () => {
  const viewRef = useRef();
  const [singleFile, setSingleFile] = useState(null);
  const [selectCar, setSelectCar] = useState([])
  const [selectTruck, setSelectTruck] = useState([])
  const [selectBike, setSelectBike] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSingleFile(...res);
    } catch (err) {

      if (!singleFile)
        setSingleFile(null);


      if (DocumentPicker.isCancel(err)) {
        console.log(err)
      } else {
        console.log(err)
        throw err;
      }
    }
  };


  const onAddCar = (Type, CarIcon) => {
    if (Type === 'ADD')
      setSelectCar(prev => [...prev, { image: CarIcon }])
    ToastAndroid.showWithGravityAndOffset(
      'ADD',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    )
  }
  const onAddTruck = (Type, TruckIcon) => {
    if (Type === 'ADD')
      setSelectCar(prev => [...prev, { image: TruckIcon }])
    ToastAndroid.showWithGravityAndOffset(
      'ADD',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    )
  }
  const onAddBike = (Type, BikeIcon) => {
    if (Type === 'ADD')
      setSelectCar(prev => [...prev, { image: BikeIcon }])
    ToastAndroid.showWithGravityAndOffset(
      'ADD',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    )
  }

  const downloadImage = async () => { // https://dev.to/majiyd/react-native-series-how-to-save-or-share-react-native-component-as-an-image-5gd3
    setIsDisabled(true)
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,)
        .then((granted) => {
          console.log('Ask Location permission error: ', granted);
          RNFS.readFile(uri, "base64")
            .then((base64) => {
              RNFS.writeFile(RNFS.DownloadDirectoryPath + '/image.png', base64, 'base64')
                .then((res) => {
                  console.log("File : ", res)
                  ToastAndroid.showWithGravityAndOffset(
                    'SAVED',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                    25,
                    50
                  )
                });
            })
        }).catch((error) => {
          console.log('Ask Location permission error: ', error);
        });
    } catch (error) {
      console.log('error', error);
    }


  };

  return (
    <Fragment>
      {singleFile ?
        <View ref={viewRef} style={{ flex: 1, borderRightColor: 'blue', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
          <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={{ uri: singleFile?.uri }} />


          <View style={{ position: 'absolute', backgroundColor: 'transparent', width: '100%', height: '100%' }}>
            {selectCar?.map((value, index) => (
              <DragResizeBlock key={index} isDisabled={isDisabled} isDraggable={true} isResizable={true} onResize={(e) => { }} x={50} y={50} >
                <View style={{ width: '100%', height: '100%' }}>
                  <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
                </View>
              </DragResizeBlock>
            ))}
            {selectTruck?.map((value, index) => (
              <DragResizeBlock key={index} isDisabled={isDisabled} isDraggable={true} isResizable={true} onResize={(e) => { }} x={0} y={0} >
                <View style={{ width: '100%', height: '100%' }}>
                  <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
                </View>
              </DragResizeBlock>
            ))}
            {selectBike?.map((value, index) => (
              <DragResizeBlock key={index} isDisabled={isDisabled} isDraggable={true} isResizable={true} onResize={(e) => { }} x={0} y={0} >
                <View style={{ width: '100%', height: '100%' }}>
                  <Image source={value?.image} resizeMode='stretch' style={{ width: '100%', height: '100%', }} />
                </View>
              </DragResizeBlock>
            ))}
          </View>
        </View>
        :
        <Button onPress={() => selectFile()} title='Select' />
      }

      {singleFile ?
        <Fragment>
          <View style={{ position: 'absolute', right: 10, top: 10, zIndex: 9999 }}>
            <Pressable onPress={() => onAddCar('ADD', CarIcon)} style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginTop: 10, overflow: 'hidden' }}>
              <Image resizeMode='stretch' style={{ height: '100%', width: '100%' }} source={CarIcon} />
            </Pressable>
            <Pressable onPress={() => onAddBike('ADD', BikeIcon)} style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginTop: 10, overflow: 'hidden' }}>
              <Image resizeMode='stretch' style={{ height: '100%', width: '100%' }} source={BikeIcon} />
            </Pressable>
            <Pressable onPress={() => onAddTruck('ADD', TruckIcon)} style={{ width: 40, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginTop: 10, overflow: 'hidden' }}>
              <Image resizeMode='stretch' style={{ height: '100%', width: '100%' }} source={TruckIcon} />
            </Pressable>
          </View>
          <View style={{ position: 'absolute', left: 10, top: 10, zIndex: 9999 }}>
            <Pressable onPress={() => selectFile()} style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginTop: 10, overflow: 'hidden' }}>
              <MaterialCommunityIcons name='image-edit' size={25} color={'#000000'} />
            </Pressable>
            <Pressable onPress={() => downloadImage()} style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginTop: 10, overflow: 'hidden' }}>
              <MaterialCommunityIcons name='image-edit' size={25} color={'blue'} />
            </Pressable>
          </View>
        </Fragment>
        : null}
    </Fragment >
  )
}

export default AddScreen