import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import apis from '@nx-react-code-sharing/shared-apis';
import { ScreenWithNavigation } from '../types';
import { s3Image } from '@nx-react-code-sharing/images';

export default function DetailScreen({
  route,
}: ScreenWithNavigation<'DetailScreen'>) {
  const scrollViewRef = React.useRef(undefined);
  const { data } = apis.bid.useBidItem(route.params?.productId);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        {data && (
          <View style={styles.wrapper}>
            <Image
              source={{
                uri: s3Image(data.imageName, { width: 300 }),
              }}
              style={styles.image}
            />
            <View style={{ height: 24 }} />
            <View style={{ flexDirection: 'row', flex: 1, height: 100 }}>
              {data.productImages.map((imageName) => (
                <Image
                  source={{
                    uri: s3Image(imageName.name, { width: 170 }),
                  }}
                  style={styles.thumbnail}
                />
              ))}
            </View>
            <View style={{ height: 12 }} />
            <Text style={styles.title}>{data.name}</Text>
            <View style={{ height: 8 }} />
            <Text style={styles.subtitle}>{data.detailName}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
  },
  wrapper: {
    padding: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 12,
  },
});
