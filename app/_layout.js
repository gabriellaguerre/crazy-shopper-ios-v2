import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Splash from './src/Splash';
import App from '../App';


export default function RootLayout({ children }) {
  console.log("IN SPLASH")
  console.log(children, 'CHILDREN')
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2500);
  }, []);

  if(isSplash) {
      return <Splash />
  } else {
    return  <Provider store={store}>
        <App />
    </Provider>
  }

 
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
