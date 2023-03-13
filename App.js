import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import MyProduct from './Src/Screens/MyProduct';
import { mystore } from './Src/Redux/MyStore';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addMyProduct } from './Src/Redux/MyProductSlice';
import Main from './Src/Screens/Main';
// const data = [
//   {
//     id: 1,
//     name: 'C Lang',
//     qty: 0,
//     price: 500,
//     brand: 'Puma',
//     image: require('./Src/Images/clang.png'),
//   },
//   {
//     id: 2,
//     name: 'C#',
//     qty: 0,
//     price: 100,
//     brand: 'Benetton',
//     image: require('./Src/Images/csharp.png'),
//   },
//   {
//     id: 3,
//     name: '.Net',
//     qty: 0,
//     price: 600,
//     brand: 'Nike',
//     image: require('./Src/Images/dotnet.png'),
//   },
// ];

const App = () => {

  LogBox.ignoreAllLogs();

  const Stack = createStackNavigator();
  return (
    <Provider store={mystore}>
  <Main/>
    </Provider>
  );
};
export default App;
