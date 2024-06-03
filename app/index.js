import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import ItemsNavigator from './src/Items';
import ListNavigator from './src/List';
import StoresNavigator from './src/Stores';
import { selectAllItems } from './src/redux/itemsSlice';


const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  
  console.log("Rendering MainTabNavigator");
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Items') {
            iconName = 'list';
            size = focused ? 25 : 20;
          } else if (route.name === 'Store') {
            iconName = 'store';
            size = focused ? 25 : 20;
          } else if (route.name === 'List') {
            iconName = 'cart-arrow-down';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#094a85',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Stores"
        component={StoresNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
      <Tab.Screen
        name="List"
        component={ListNavigator}
        options={{
          tabBarBadge: useSelector(selectAllItems).filter(item => item.isList === true).length || null,
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemsNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
    </Tab.Navigator>
  );
}