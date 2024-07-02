import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, selectAllItems } from '../redux/itemsSlice';
import { nanoid } from '@reduxjs/toolkit';




function AddItemForm({navigation, route}) {

  const router = useRouter()
  const params = useLocalSearchParams()
  const {item: thisitem} = params ? params : 0
 
  const items = useSelector(selectAllItems)
  const dispatch = useDispatch()

  const [itemName, setItemName] = useState(params ? params.item : '')
  const [desc, setDesc] = useState(params ? params.desc : '')
  // const [price, setPrice] = useState(thisitem ? thisitem.price : 0)
  // const [store, setStore] = useState(thisitem ? thisitem.store : '')
  const [isItem, setIsItem] = useState(params ? params.isItem : true)
  const [isList, setIsList] = useState(params ? params.isList : false)
  const [isDone, setIsDone] = useState(params ? params.isDone : false)
  const [storeName, setStoreName] = useState(params ? params.storeName : null)

  // console.log(params, 'params in Add Item Form')
  // console.log(thisitem, 'thisitem in add item form')

  // useEffect(()=>{
  //   if(thisitem) {
  //     setItemName(thisitem.item);
  //     setDesc(thisitem.desc);
  //     // setPrice(thisitem.price);
  //     // setStore(thisitem.store)
  //   }
  // },[thisitem])

  const createItem = async () => {
   
    try {
      // console.log(itemName, 'itemName')
      if(itemName) {
        const itemExist = items.find(item=> item.item.toLowerCase() === itemName.toLowerCase())
      // console.log(itemExist, 'itemExist')
        if(itemExist) {
          Alert.alert('Warning', `${itemName} is already in your list`)
        } else {
        const newItem = {id: nanoid(), item: itemName, desc: desc, storeName: null, isItem: true, isList: false, isDone: false}
      
        dispatch(addItem(newItem))
        Alert.alert('Success', `Successfully added ${itemName}`)
        setItemName('')
        setDesc('')
        // setPrice('')
        // setStore('')
        setIsItem(true)
        setIsList(false)
        setIsDone(false)
        setStoreName(null)
        // navigation.navigate("Items List")
        router.back()
        const itemsList = [...items, newItem]
        const jsonValue = JSON.stringify(itemsList)
        await AsyncStorage.setItem('Items', jsonValue)
        }
      } else {
        Alert.alert('Warning', 'Please enter an item')
      }
      } catch (error) {
        console.log(error)
    } 
  }

  const editItem = async () => {
    try {
      console.log(itemName, 'item name in edit item')
        if(itemName) {
          const editItem = {id: params.id, item: itemName, desc, storeName, isItem, isList, isDone}
          dispatch(updateItem(editItem))
          router.back()
          Alert.alert('Success', `Successfully edited ${itemName}`)
          setItemName('')
          setDesc('')
          // setPrice('')
          // setStore('')

          const updatedItems = items.map(i => (i.id === editItem.id ? editItem : i));
          await AsyncStorage.setItem('Items', JSON.stringify(updatedItems));
        } else {
          Alert.alert('Warning', 'Please enter all item details');
          await AsyncStorage.setItem('Items', jsonValue)
          
        } 

    }catch (error) {
      console.log(error)
    }
   }

  const returnHome = () => {
      navigation.goBack()    
   }
   
    return (
    
      <SafeAreaView style={styles.container}>
        
        <TextInput 
            style={styles.input}
            placeholder='Enter Item Name'
            value={itemName}
            onChangeText={(value)=>setItemName(value)}
            />

        <TextInput 
            style={styles.input}
            placeholder='Enter Item Description (optional)'
            value={desc}
            onChangeText={(value)=>setDesc(value)}
            multiline
            />

         {/* <TextInput 
            style={styles.input}
            placeholder='Store Name'
            value={store}
            onChangeText={(value)=>setStore(value)}
            /> */}

        <View>
          {!thisitem ? (
          <TouchableOpacity style={styles.addButton} onPress={createItem}>
              <Text style={styles.addText}>+ Add To Items List</Text>
           </TouchableOpacity >
          ):(
          <TouchableOpacity  style={styles.editButton}  onPress={editItem}>  
            <Text style={styles.editText}>Edit This Item</Text>
            </TouchableOpacity>
            )}
         
        </View>
      </SafeAreaView>
     
      
    )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    // textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
  addItemButton: {
    borderRadius: 30,
    margin: 15,
    backgroundColor: 'green',   
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  editText: {
    fontSize: 20,
    color: 'white',
    margin: 15,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#094a85', 
    borderRadius: 20, 
    margin: 20,
  },
  addText: {
    fontSize: 20,
    color: 'white',
    margin: 15,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#094a85', 
    borderRadius: 20, 
    margin: 20,
  }
})

export default AddItemForm