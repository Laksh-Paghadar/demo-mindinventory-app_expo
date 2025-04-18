import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
// import { useSelector } from 'react-redux';

import {
  LoginScreen,
  NetworkLoggerScreen,
  NewsListScreen,
  SettingScreen,
} from '@src/screens';
// import { isForceUpdate } from '@src/store';

import { NavStackParams, Screen } from './appNavigation.type';
import ResourcesListComponent from '@src/screens/ResourceList/ResourceListScreen';
// import { ForUpdateStack } from './ForceupdateStack';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation = () => {
  // const isForceUpdateApp = useSelector(isForceUpdate);

  // return (
  //   <>
  //     {isForceUpdateApp ? (
  //       <ForUpdateStack />
  //     ) : (
  //       <Stack.Navigator
  //         screenOptions={screenOptions}
  //         initialRouteName={Screen.LOGIN}>
  //         <Stack.Screen name={Screen.NEWS_LIST} component={NewsListScreen} />
  //         <Stack.Screen
  //           name={Screen.NEWS_DETAIL}
  //           component={NewsDetailScreen}
  //         />
  //         <Stack.Screen name={Screen.SETTING} component={SettingScreen} />
  //         <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
  //         {__DEV__ && (
  //           <Stack.Screen
  //             name={Screen.NETWORK_CHECK}
  //             component={NetworkLoggerScreen}
  //           />
  //         )}
  //       </Stack.Navigator>
  //     )}
  //   </>
  // );

  return (
    <>
      {
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={Screen.LOGIN}>
          <Stack.Screen name={Screen.NEWS_LIST} component={NewsListScreen} />

          <Stack.Screen name={Screen.SETTING} component={SettingScreen} />
          <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
          <Stack.Screen
            name={Screen.RESOURCE_LIST}
            component={ResourcesListComponent}
          />
          {__DEV__ && (
            <Stack.Screen
              name={Screen.NETWORK_CHECK}
              component={NetworkLoggerScreen}
            />
          )}
        </Stack.Navigator>
      }
    </>
  );
};
