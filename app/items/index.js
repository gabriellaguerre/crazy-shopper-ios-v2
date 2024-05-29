import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Items from '../src/Items';
import AddItemForm from '../src/AddItemForm';

const Stack = createStackNavigator();


export default function ItemsNavigator() {
   
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Items List"
          component={Items}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.buttonItem} onPress={() => navigation.navigate('Item')}>
                  <FontAwesome5 name={'plus'} size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: { backgroundColor: '#C0C0C0' },
            headerTintColor: '#094a85',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25 },
          }}
        />
        <Stack.Screen name="Item" component={AddItemForm} />
      </Stack.Navigator>
    );
  }