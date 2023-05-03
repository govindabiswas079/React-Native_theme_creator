import React, { Fragment, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, Animated, Pressable, Dimensions, FlatList, StyleSheet, TextInput } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FocusAwareStatusBar } from '../useFocusedStatusBar/FocusAwareStatusBar'
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../AppHeader/AppHeader'
import { setTempletData } from '../store/reducerSlicer'
import { useDispatch } from 'react-redux';
import { data, banners } from '../Data'


const headerHeight = 100;
let scrollValue = 0;
let headerVisible = true;
let focused = false;

const HomeScreen = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(1);
  const [activeDot, setActiveDot] = useState(1)
  const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });
  const inputTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerHeight / 4, 0],
  });
  const opacity = animation;
  const onScroll = e => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };


  return (
    <Fragment>
      <FocusAwareStatusBar backgroundColor={'#8ab4f8'} />
      <AppHeader style={{ backgroundColor: '#8ab4f8', }}>
        <View style={{ flexGrow: 1 }} />
        <Text style={{ fontFamily: 'OpenSans-Bold', textAlign: 'center', color: '#FFFFFF', fontSize: 16 }}>Home</Text>
        <View style={{ flexGrow: 1 }} />
      </AppHeader>

      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10, }}>
          {data.map((value, index) => (
            <TouchableOpacity onPress={() => setIsActive(value?.id)} key={index} style={{ padding: 6, backgroundColor: isActive === value?.id ? '#8ab4f8' : 'transparent', margin: 5, borderRadius: 10, borderColor: '#8ab4f8', borderWidth: 1.5 }}>
              <Text style={{ color: isActive === value?.id ? '#FFFFFF' : '#8ab4f8', fontSize: 14, fontFamily: isActive === value?.id ? 'OpenSans-Bold' : 'OpenSans-SemiBold', }}>{value?.value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          // contentContainerStyle={{ paddingTop: headerHeight / 2 }}
          onScroll={onScroll}
          ListHeaderComponent={() => {
            return (
              <Fragment>
                <Carousel
                  data={banners}
                  renderItem={({ item, index }) => {
                    return (
                      <Fragment>
                        <Pressable key={index} style={{ height: 200, width: '100%', borderRadius: 10, overflow: 'hidden', paddingHorizontal: 15 }}>
                          <Image source={{ uri: item.image }} resizeMode='stretch' style={{ height: '100%', borderRadius: 10 }} />
                        </Pressable>
                      </Fragment>
                    )
                  }}

                  sliderWidth={viewportWidth}
                  itemWidth={viewportWidth}
                  hasParallaxImages={false}
                  firstItem={1}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  // inactiveSlideShift={20}
                  containerCustomStyle={{
                    marginTop: 15,
                    overflow: 'visible'
                  }}
                  contentContainerCustomStyle={{ paddingVertical: 10 }}
                  loop={false}
                  loopClonesPerSide={2}
                  autoplay={false}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => { setActiveDot(index) }}
                />
                <View>
                  <Pagination
                    dotsLength={banners?.length}
                    activeDotIndex={activeDot}
                    containerStyle={{ paddingVertical: 0, paddingBottom: 15 }}
                    dotColor={'#475AD7'}
                    dotStyle={{ width: 15, height: 15, borderRadius: 50, }}
                    inactiveDotColor={'#F3F4F6'}
                    inactiveDotOpacity={30}
                  // inactiveDotScale={2}
                  />
                </View>
              </Fragment>
            )
          }}

          viewabilityConfig={{}}
          onEndReachedThreshold={0.10}
          onEndReached={() => console.log('click')}
          initialNumToRender={5}
          numColumns={2}
          ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
          data={banners}
          renderItem={({ item, index }) => {

            return (
              <View style={{ paddingHorizontal: 15, width: '50%' }}>
                <Pressable ref={(c) => { }} onPress={() => { dispatch(setTempletData(item)); Navigation.navigate({ name: "UseTemplete", params: { TempleteId: item?.id } }) }} style={{ backgroundColor: '#8ab4f8', height: 190, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, overflow: 'hidden', }}>
                  <Image source={{ uri: item?.image }} resizeMode='stretch' style={{ width: '100%', height: '100%' }} />
                </Pressable>
                <Text style={{ color: '#8ab4f8', fontSize: 14, fontFamily: 'OpenSans-SemiBold', }}>{item?.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item?.id}
        />

      </View>

      {/* <Animated.View style={[styles.searchContainer, { transform: [{ translateY }] }]}>
        <Animated.View
          style={[
            { opacity, transform: [{ translateY: inputTranslateY }] },
          ]}>
          <View style={{ backgroundColor: '#ffffff', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10, }}>
              {data.map((value, index) => (
                <TouchableOpacity onPress={() => setIsActive(value?.id)} key={index} style={{ padding: 6, backgroundColor: isActive === value?.id ? '#8ab4f8' : 'transparent', margin: 5, borderRadius: 10, borderColor: '#8ab4f8', borderWidth: 1.5 }}>
                  <Text style={{ color: isActive === value?.id ? '#FFFFFF' : '#8ab4f8', fontSize: 14, fontFamily: isActive === value?.id ? 'OpenSans-Bold' : 'OpenSans-SemiBold', }}>{value?.value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Animated.View>
      </Animated.View> */}

    </Fragment>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    height: headerHeight,
    backgroundColor: '#FFFFFF',
    width: '100%',
    position: 'absolute',
    // padding: 10,
    // paddingHorizontal: 15,
    overflow: 'hidden',
  },

});





/* 

<ScrollView showsVerticalScrollIndicator={false}>
  <Carousel
    data={banners}
    renderItem={({ item, index }) => {
      return (
        <Fragment>
          <Pressable key={index} style={{ height: 200, width: '100%', borderRadius: 10, overflow: 'hidden', paddingHorizontal: 15 }}>
            <Image source={{ uri: item.image }} resizeMode='stretch' style={{ height: '100%', borderRadius: 10 }} />
          </Pressable>
        </Fragment>
      )
    }}

    sliderWidth={viewportWidth}
    itemWidth={viewportWidth}
    hasParallaxImages={false}
    firstItem={1}
    inactiveSlideScale={1}
    inactiveSlideOpacity={1}
    // inactiveSlideShift={20}
    containerCustomStyle={{
      marginTop: 15,
      overflow: 'visible'
    }}
    contentContainerCustomStyle={{ paddingVertical: 10 }}
    loop={false}
    loopClonesPerSide={2}
    autoplay={false}
    autoplayDelay={500}
    autoplayInterval={3000}
    onSnapToItem={(index) => { setActiveDot(index) }}
  />
  <View>
    <Pagination
      dotsLength={banners?.length}
      activeDotIndex={activeDot}
      containerStyle={{ paddingVertical: 0, paddingBottom: 15 }}
      dotColor={'#475AD7'}
      dotStyle={{ width: 15, height: 15, borderRadius: 50, }}
      inactiveDotColor={'#F3F4F6'}
      inactiveDotOpacity={30}
    // inactiveDotScale={2}
    />
  </View>

  <View style={{ paddingHorizontal: 15 }}>
    <Row>
      {banners.map((value, index) => (
        <Col key={index} xs={6} sm={6} md={4} lg={4}>
          <Pressable ref={(c) => { }} onPress={() => { dispatch(setTempletData(value)); Navigation.navigate("UseTemplete") }} style={{ backgroundColor: '#8ab4f8', height: 190, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, overflow: 'hidden', marginTop: 10 }}>
            <Image source={{ uri: value?.image }} resizeMode='stretch' style={{ width: '100%', height: '100%' }} />
          </Pressable>
          <Text style={{ color: '#8ab4f8', fontSize: 14, fontFamily: 'OpenSans-SemiBold', textAlign: 'center' }}>{value?.name}</Text>
        </Col>
      ))}
    </Row>
  </View>
</ScrollView>

*/