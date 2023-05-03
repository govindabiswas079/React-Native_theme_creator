import React, { Fragment, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootNavigation, AppNavigation } from './Navigation';
import { setAuthLoader } from './store/reducerSlicer';

const CombineRoute = () => {
    const dispatch = useDispatch();
    const { authLoading } = useSelector(state => state?.reducerSlicer);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const onIsAuth = async () => {
            const data = await AsyncStorage.getItem('isAuth');
            if (data) {
                dispatch(setAuthLoader(false))
                setIsAuth(true)
            } else {
                setIsAuth(true)
                dispatch(setAuthLoader(false))
            }
        }
        onIsAuth();
    }, [authLoading]);

    if (authLoading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar translucent={false} barStyle='dark-content' backgroundColor="#FFFFFF" />
                <ActivityIndicator animating={true} size={'large'} color={'#6CCF7F'} />
            </View>
        )
    }

    return (
        <Fragment>
            {isAuth ?
                <AppNavigation />
                :
                <RootNavigation />}
        </Fragment>
    )
}

export default CombineRoute