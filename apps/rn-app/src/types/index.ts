import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined; // 이 스크린은 파라미터를 받지 않습니다.
  DetailScreen: {
    productId: number;
  };
};

export type ScreenWithNavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
