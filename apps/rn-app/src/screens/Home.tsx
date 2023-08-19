/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScreenWithNavigation } from '../types';

// @ts-ignore
import { Image, Bold } from '@nx-react-code-sharing/shared-ui-components';
import { env } from '../libs/env';

export default function HomeScreen({ navigation }: ScreenWithNavigation) {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Bold.Bold8 testID="heading">
              Welcome RnApp 👋 Todo List (API_URL={env.API_URL})
            </Bold.Bold8>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Detail');
            }}
          >
            <Image
              style={styles.image}
              alt="storybook"
              source={require('../../assets/storybook.png')}
            />
          </TouchableWithoutFeedback>

          <View style={styles.todos}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  todos: {
    flexDirection: 'column',
  },
});
