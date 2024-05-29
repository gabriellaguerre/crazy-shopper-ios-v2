
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../src/Stores';
import AddStoreForm from '../src/AddStoreForm';

const Stack = createStackNavigator();


export default function StoresNavigator() {

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Stores List"
          component={Stores}
          options={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#C0C0C0' },
            headerTintColor: '#094a85',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
          }}
        />
        <Stack.Screen name="Store" component={AddStoreForm} />
      </Stack.Navigator>
    );
  }