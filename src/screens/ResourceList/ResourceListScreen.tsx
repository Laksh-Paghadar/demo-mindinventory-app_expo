import { AnimatedTouchableOpacity, Text } from '@app/blueprints';
import { BaseLayout } from '@src/components';
import React from 'react';
import { View } from 'react-native';
import useResources from './useResources';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

const ResourcesListComponent = () => {
  const { list } = useResources();

  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      year: number;
      name: string;
      color: string;
      pantone_value: string;
    };
  }) => {
    return (
      <View>
        <Text preset="h2">ID : {item?.id}</Text>
        <Text preset="h4">Name : {item?.name}</Text>
        <Text preset="h4">Year : {item.year}</Text>
        <Text preset="h4">P Value : {item.pantone_value}</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BaseLayout>
        <View style={{ padding: 10 }}>
          <Text preset="h1">Resources List Screen</Text>

          <FlatList
            data={list?.data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </BaseLayout>
    </GestureHandlerRootView>
  );
};

export default ResourcesListComponent;
