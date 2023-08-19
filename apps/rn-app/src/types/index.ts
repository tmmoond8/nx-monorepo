import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ScreenWithNavigation<T = Record<string, unknown>> =
  NativeStackScreenProps<T & ParamListBase>;
