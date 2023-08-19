/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomeScreen, DetailScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'List' }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{ title: 'Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
