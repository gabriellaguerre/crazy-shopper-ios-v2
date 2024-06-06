import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Tabs} from 'expo-router';
import { useSelector } from 'react-redux';
// import ItemsNavigator from './items';
// import ListNavigator from './list';
// import StoresNavigator from './stores';
import { selectAllItems } from '../../redux/itemsSlice';




export default function TabLayout() {
  
  console.log("Rendering MainTabNavigator");
  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'items') {
            iconName = 'list';
            size = focused ? 30 : 25;
          } else if (route.name === 'index') {
            iconName = 'store';
            size = focused ? 30 : 25;
          } else if (route.name === 'list') {
            iconName = 'cart-arrow-down';
            size = focused ? 30 : 25;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#094a85',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen
        name="index"
        // component={StoresNavigator}
        options={{
          title: 'Stores',
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
      <Tabs.Screen
        name="list"
        // component={ListNavigator}
        options={{
          tabBarBadge: useSelector(selectAllItems).filter(item => item.isList === true).length || null,
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
      <Tabs.Screen
        name="items"
        // component={ItemsNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
    </Tabs>
  );
}