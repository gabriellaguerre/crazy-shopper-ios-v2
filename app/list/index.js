import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../src/List';

const Stack = createStackNavigator();


export default function ListNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Grocery List"
          component={List}
          options={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#C0C0C0' },
            headerTintColor: '#094a85',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
          }}
        />
      </Stack.Navigator>
    );
  }