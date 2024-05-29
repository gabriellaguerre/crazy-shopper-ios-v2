import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Stack, Tabs } from 'expo-router';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Items from './src/Items';
import List from './src/List';
// import Done from './src/Done';
import AddItemForm from './src/AddItemForm';
import AddStoreForm from './src/AddStoreForm';
// import CreateShoppingListForm from '../src/CreateShoppingListForm';
import Stores from './src/Stores';
import Splash from './src/Splash';
import { selectAllItems, shoppingItems } from './src/redux/itemsSlice';
import { useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';



// const Tab = createBottomTabNavigator()
// const Stack = createStackNavigator()

function App() {
  // const shoppingItems = useSelector(selectAllItems)
  // const shoppingList = shoppingItems.filter(item=> item.isList === true)
  // // const doneList = shoppingItems.filter(item => item.isDone === true)
  // const itemsList = shoppingItems.filter(item=> item.isItem)

 
  // const [isSplash, setIsSplash] = useState(true);
 
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setIsSplash(false);
  //   }, 2500);
  // },[])

    
  return (
 
    // <>
    //   {isSplash ? (
    //      <Stack.Navigator>
    //      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    //    </Stack.Navigator>
    //   ):(

     
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name==='Items') {
              iconName='list'
              size = focused ? 25 : 20
              // color = focused ? 'blue' : 'black'
            } else if(route.name==='Stores') {
                iconName='store'
                size = focused ? 25 : 20
                // color = focused ? 'green' : 'black'
                
            }else if(route.name==='List') {
              iconName='cart-arrow-down'
              size = focused ? 25 : 20
              // color = focused ? '#7b5a60' : 'black'
            }
            // } else if(route.name==='Done List') {
            //   iconName='check-square'
            //   size = focused ? 25 : 20
            //   color = focused ? '#2F4F4F' : 'black'
            // } 
            return(
              <FontAwesome5 
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
          tabBarActiveTintColor: '#094a85', // Color for active tab
          tabBarInactiveTintColor: 'gray', // Color for inactive tab
      }
        )}
      
        
      >
        <Tabs.Screen 
          name='Stores'
          component={StoresTabNavigator}
          options={{headerShown: false,
                    tabBarLabelStyle: {fontSize: 15}}}
        />
        <Tabs.Screen 
          name='List'
          component={ListTabNavigator} 
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 15}
          }}
          
          // tabBarBadge: shoppingList.length ? shoppingList.length :  null,
        />
         {/* <Tab.Screen 
          name='Done List'
          component={Done}
          options={{ tabBarBadge: doneList.length ? doneList.length :  null,
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#B0E0E6'},
                    headerTintColor: '#2F4F4F',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
                    tabBarLabelStyle: {fontSize: 15}
          }}
        /> */}
          <Tabs.Screen 
          name='Items'
          component={ItemsTabNavigator}
          options={{ headerShown: false,
                    tabBarLabelStyle: {fontSize: 15},
                    // tabBarBadge: itemsList.length ? itemsList.length :  null, 
                    }}
        />
    </Tabs>  
      )}
    // </>
 
  // );
// }

function ItemsTabNavigator(){
  const navigation = useNavigation();
  return(
   
      <Stack>
     
      <Stack.Screen 
          name='Items List'
          component={Items}
          options={{ headerTitleAlign: 'center',
                     headerRight: ()=> <View style={styles.touchContainer}><TouchableOpacity style={styles.buttonItem} onPress={()=>{navigation.navigate('Item')}} >
                     <FontAwesome5 name={'plus'} size={20} color={'white'}/>
                    </TouchableOpacity></View>,
                    headerStyle: {backgroundColor: '#C0C0C0'},
                    headerTintColor: '#094a85',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
                    
                     
                  }}
         />
        <Stack.Screen 
          name='Item'
          component={AddItemForm}
         />       
      </Stack>
  )
}

function StoresTabNavigator(){
  const navigation = useNavigation();
  return(
   
      <Stack>
     
      <Stack.Screen 
          name='Stores List'
          component={Stores}
          options={{ headerTitleAlign: 'center',
                     headerRight: ()=> <View style={styles.touchContainer}><TouchableOpacity style={styles.buttonStore} onPress={()=>{navigation.navigate('Store')}} >
                     <FontAwesome5 name={'plus'} size={20} color={'white'}/>
                    </TouchableOpacity></View>,
                    headerStyle: {backgroundColor: '#C0C0C0'},
                    headerTintColor: '#094a85',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 25}
                     
                  }}
         />
        <Stack.Screen 
          name='Store'
          component={AddStoreForm}
         />
         <Stack.Screen 
          name='Items List'
          component={Items}
          options={{headerShown: false}}
         />
      
      </Stack>
  )
}

function ListTabNavigator(){
  const navigation = useNavigation();
  return(
   
      <Stack>
     
      <Stack.Screen 
          name='Grocery List'
          component={List}
          options={{ 
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#C0C0C0'},
            headerTintColor: '#696969',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
            tabBarLabelStyle: {fontSize: 15}                 
 }}
         />
       
         <Stack.Screen 
          name='Items List'
          component={Items}
          options={{headerShown: false}}
         />
      
      </Stack>
  )
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

export default App;
