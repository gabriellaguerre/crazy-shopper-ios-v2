import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './app/_layout'
import MainTabNavigator from './app/index';

export default function App() {
  return (
    <NavigationContainer>
      <RootLayout>
         <MainTabNavigator />
       </RootLayout>
     </NavigationContainer>
  );
}
