import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { AnimatedTouchableOpacity, Text } from '@app/blueprints';

import { Icons, SVGIcons } from '@src/assets';
import { AppImage, BaseLayout, Icon, SvgIcon } from '@src/components';
import { contents } from '@src/context';

import { scaled } from '@src/utils';
import useUsersList from './useUsersList';

const NewsListScreen = () => {
  const { color, data, handleNavigationNetwork, handleSetting, styles } =
    useUsersList();

  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    };
  }) => {
    return (
      <AnimatedTouchableOpacity
        containerStyle={styles.newsItemContainer}
        onPress={() => {}}>
        <AppImage source={item.avatar} style={styles.newsImage} />
        <View style={styles.newsTextView}>
          <Text preset="h6">{item?.first_name + item.last_name}</Text>
          <Text preset="title">Email: {item.email}</Text>
        </View>
      </AnimatedTouchableOpacity>
    );
  };

  return (
    <BaseLayout>
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data?.data}
        style={styles.flatlistStyles}
        initialNumToRender={5}
        keyExtractor={item => `${item.id}_${item.email}`}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text preset="h1">UserList API</Text>
            <TouchableOpacity
              style={styles.networkButton}
              onPress={handleNavigationNetwork}>
              <Icon icon={Icons.DEBUG_ICONS} style={styles.debugIcon} />
            </TouchableOpacity>
            <AnimatedTouchableOpacity
              onPress={handleSetting}
              containerStyle={styles.settingBtn}>
              <SvgIcon
                pathFill={color.primaryColor}
                icon={SVGIcons.SETTING}
                {...scaled(25)}
              />
            </AnimatedTouchableOpacity>
          </View>
        }
      />
    </BaseLayout>
  );
};

export default React.memo(NewsListScreen);
