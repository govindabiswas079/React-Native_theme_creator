import React from "react";
import { StatusBar, Platform, View } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from 'react-native-paper';

export function FocusAwareStatusBar(props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return isFocused ?
    Platform?.OS == 'ios' ?
      <View style={{ height: insets?.insets, width: '100%', backgroundColor: '#FFFFFF' }}>
        <StatusBar barStyle={'light-content'} {...props} />
      </View>
      :
      <StatusBar barStyle={'light-content'} {...props} />
    :
    Platform?.OS == 'ios' ?
      <View style={{ height: insets?.insets, width: '100%', backgroundColor: '#FFFFFF' }}>
        <StatusBar barStyle={'light-content'} {...props} />
      </View>
      :
      <StatusBar barStyle={'light-content'} {...props} />;
}