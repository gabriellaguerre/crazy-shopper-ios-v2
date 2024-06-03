import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Splash from './src/Splash';
import { View, Text } from 'react-native';




export default function RootLayout({ children }) {
  
  console.log("Rendering RootLayout");
  console.log(children, 'CHILDREN')

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2500);
  }, []);

  if(isSplash) {
    console.log("Showing Splash Screen")
      return <Splash />
  }

  console.log("Showing Main Content")
  return  (
    <Provider store={store}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello There</Text>
     </View>
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   touchContainer: {
//     marginRight: 10,
//   },
//   buttonItem: {
//     width: 35,
//     height: 35,
//     borderRadius: 30,
//     backgroundColor: '#094a85',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
