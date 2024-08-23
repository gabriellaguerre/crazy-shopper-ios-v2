import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { selectAllItems } from '../redux/itemsSlice';
import { selectAllStores } from '../redux/storesSlice';
import { useDispatch, useSelector } from 'react-redux';

function Splash({navigation}) {
  // const items = useSelector(selectAllItems)
  // const stores = useSelector(selectAllStores)
  // const dispatch = useDispatch()
 
  // useEffect(()=>{
  //   getList()
  //   getStores()
  // },[])

  // const getStores = async () => {
  //   try {
  //      const jsonValue = await AsyncStorage.getItem('Stores')
  //      if(jsonValue !== null){
  //       const storesArray = JSON.parse(jsonValue)
      
  //       if(Array.isArray(storesArray)){
  //         storesArray.forEach(obj => {
  //       const thisStore = { id: obj.id, name: obj.name, description: obj.description, isStore: obj.isStore };
  //       dispatch(addStore(thisStore));
  //       });
  //       } else {
  //         console.error("Error loading items: Invalid data format")
  //       }
        
  //      }
  //   } catch (error) {
  //     console.error('Error loading items:', error)
      
  //   }

  // }
  // const getList = async () => {
  //   try {
  //      const jsonValue = await AsyncStorage.getItem('Items')
  //      if(jsonValue !== null){
  //       const itemsArray = JSON.parse(jsonValue)
      
  //       if(Array.isArray(itemsArray)){
  //         itemsArray.forEach(obj => {
  //       const thisItem = { id: obj.id, item: obj.item, desc: obj.desc, price: obj.price, isItem:obj.isItem, isList: obj.isList, isDone: obj.isDone, storeName: obj.storeName };
  //       dispatch(addItem(thisItem));
  //       });
  //       } else {
  //         console.error("Error loading items: Invalid data format")
  //       }
        
  //      }
  //   } catch (error) {
  //     console.error('Error loading items:', error)
      
  //   }

  // }
    return (
      <View style={styles.body}>
        <Image 
          style={styles.logo}
          source={require('../assets/shopping-cart-logo.png')}
        />
        <Text style={styles.text}> Crazy Shopper </Text>
      </View>
    )
 
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBCAAD'
    // backgroundColor: '#9400D3'
  },
  logo: {
    width: 200,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
})

export default Splash
