/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import apis from '@nx-react-code-sharing/shared-apis';
import { s3Image } from '@nx-react-code-sharing/images';
import { ScreenWithNavigation } from '../types';

import { Product } from '@nx-react-code-sharing/shared-types';

export default function HomeScreen({ navigation }: ScreenWithNavigation) {
  const { data, loadMore, isLoading } = apis.bid.useBidList();
  const loadMoreTriggerRef = React.useRef(loadMore);
  loadMoreTriggerRef.current = loadMore;
  const handleClickItem = (productId: number) => {
    navigation.navigate('Detail', { productId });
  };
  const handleLoadMore = () => {
    loadMoreTriggerRef.current();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {data.length > 0 && (
        <GridView
          items={data}
          isLoading={isLoading}
          handleClickItem={handleClickItem}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  );
}

function GridView({
  items = [],
  isLoading,
  handleClickItem,
  handleLoadMore,
}: {
  items?: Product[];
  isLoading;
  handleClickItem: (itemId: number) => void;
  handleLoadMore: () => void;
}) {
  const convertToFlatListData = (items: any[]) => {
    return items.map((item: Product, index) => ({
      item,
      index,
    }));
  };
  return (
    <FlatList
      numColumns={2}
      style={styles.container}
      data={convertToFlatListData(items)}
      keyExtractor={(item) => item.item.idx}
      renderItem={({ item: { item } }) => (
        <TouchableWithoutFeedback
          onPress={() => {
            handleClickItem(item.id);
          }}
        >
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{ uri: s3Image(item.imageName, { width: 320 }) }}
              />
              <View style={{ height: 12 }} />
              <Text style={styles.title}>{item.name}</Text>
              <View style={{ height: 8 }} />
              <Text style={styles.price}>₩{item.price}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" color="#000" /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    height: '100%',
    borderColor: 'transparent',
    backgroundColor: '#efefef',
    borderRadius: 18,
    padding: 12,
  },
  cardWrapper: {
    width: '50%', // 3열 그리드를 원한다면
    aspectRatio: 170 / 300,
    paddingTop: 0,
    paddingBottom: 12,
    paddingLeft: 4,
    paddingRight: 4,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  },
});
