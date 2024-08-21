import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Splash from './Splash';
import { View, Text } from 'react-native';

import { Stack } from 'expo-router/stack'


export default function RootLayout() {
  
//  console.log("IN ROOTLAYOUT")
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer =  setTimeout(() => {
      setIsSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

 
  return  (
    <Provider store={store}>
    {isSplash ? (
      <Splash />
    ):(
     <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false, }}/>
    
      <Stack.Screen name="AddItemForm"  options={{  headerBackTitle: 'Back', 
                                                    headerBackTitleStyle: {
                                                      color: '#094a85'
                                                    },
                                                    title: 'Item',
                                                    headerTitleStyle: {
                                                    color: '#094a85',
                                                    fontSize: 25,
                                                    }}}/>

      <Stack.Screen name="AddStoreForm" options={{ headerBackTitle: 'Back', 
                                                   title: 'Store',
                                                   headerTitleStyle: {
                                                    color: '#094a85',
                                                    fontSize: 25,
                                                    }}}/>
     </Stack>

    )}
    </Provider>
  )
}


