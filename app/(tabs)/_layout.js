import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Tabs} from 'expo-router';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { selectAllItems } from '../../redux/itemsSlice';





export default function TabLayout() {
 
  const router = useRouter()

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'items') {
            iconName = 'list';
            size = focused ? 30 : 25;
          } else if (route.name === 'stores') {
            iconName = 'store';
            size = focused ? 30 : 25;
          } else if (route.name === 'index') {
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
        // component={ListNavigator}
        options={{
          title: 'List',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#C0C0C0'},
          headerTintColor: '#696969',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
          tabBarLabelStyle: {fontSize: 15}, 
          tabBarBadge: useSelector(selectAllItems).filter(item => item.isList === true).length || null,
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />

      <Tabs.Screen
        name="stores"
        
        // component={StoresNavigator}
        options={{
          title: 'Stores',
          headerTitleAlign: 'center',
          headerRight: ()=> <View style={styles.touchContainer}><TouchableOpacity style={styles.buttonStore} onPress={()=>{router.push("/AddStoreForm")}} >
          <FontAwesome5 name={'plus'} size={20} color={'white'}/>
         </TouchableOpacity></View>,
         headerStyle: {backgroundColor: '#C0C0C0'},
         headerTintColor: '#094a85',
         headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
     
      <Tabs.Screen
        name="items"
        // component={ItemsNavigator}
        options={{
          title: 'Items',
          headerTitleAlign: 'center',
        headerRight: ()=> <View style={styles.touchContainer}><TouchableOpacity style={styles.buttonItem} onPress={()=>{router.push("/AddItemForm")}} >
        <FontAwesome5 name={'plus'} size={20} color={'white'}/>
       </TouchableOpacity></View>,
       headerStyle: {backgroundColor: '#C0C0C0'},
       headerTintColor: '#094a85',
       headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
          tabBarLabelStyle: { fontSize: 15 },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  buttonStore: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#094a85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonItem: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#094a85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchContainer: {
    marginRight: 10,
  }
})