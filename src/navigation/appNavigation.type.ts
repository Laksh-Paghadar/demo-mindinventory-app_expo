import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  NEWS_DETAIL = 'NEWS_DETAIL',
  NEWS_LIST = 'NEWS_LIST',
  SETTING = 'SETTING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.NEWS_LIST]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
