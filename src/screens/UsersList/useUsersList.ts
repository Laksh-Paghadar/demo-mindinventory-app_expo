import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { contents, useAppContext } from '@src/context';
import { getUsersListData, setUsersListData, useAppDispatch } from '@src/store';
import { logger } from '@src/utils';

import { newsListStyles } from './UsersList.style';
import { Screen } from '../../navigation/appNavigation.type';

const useUsersList = () => {
  const { color, loader, navigation, services } = useAppContext();
  const dispatch = useAppDispatch();

  const data = useSelector(getUsersListData);

  const getUsersData = useCallback(async () => {
    loader.current?.show();
    try {
      const getUser = await services.getUsers(1);
      dispatch(setUsersListData(getUser));
    } catch (error) {
      logger('Error getUsers>>', error);
    } finally {
      loader.current?.hide();
    }
  }, [loader, services, dispatch]);

  const handleNavigationNetwork = useCallback(() => {
    navigation.navigate(Screen.NETWORK_CHECK);
  }, [navigation]);

  // const handleNavigationNewsItem = useCallback(
  //   (item: UserListResult) => () => {
  //     navigation.navigate(Screen.NEWS_DETAIL, {
  //       item,
  //     });
  //   },
  //   [navigation]
  // );

  const handleSetting = useCallback(() => {
    navigation.navigate(Screen.SETTING);
  }, [navigation]);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  return {
    color,
    contents,
    data,
    handleNavigationNetwork,
    handleSetting,
    styles: newsListStyles(color),
  };
};

export default useUsersList;
