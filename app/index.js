import { Text, View } from "react-native";
import { Provider} from 'react-redux';
import { store } from './src/redux/store'
import App from './App'

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit hello app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

 const Index = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

export default Index;