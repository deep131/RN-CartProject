import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyProduct from '../Screens/MyProduct';
import { useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {addMyProduct} from '../Redux/MyProductSlice';
import MyCart from './MyCart';
const data = [
  {
    id: 0,
    name: 'Puma shoes ',
    qty: 0,
    price: 2000,
    brand: 'PUMA',
    image: require('../../Src/Images/pumaa.png'),
  },
  {
    id: 1,
    name: 'Nike shoes ',
    qty: 0,
    price: 1500,
    brand: 'Nike',
    image: require('../../Src/Images/nikee.png'),
  },
  {
    id: 2,
    name: 'Nike',
    qty: 0,
    price: 3500,
    brand: 'Nike',
    image: require('../../Src/Images/nikee.png'),
  },
];

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    data.map(item => {
      dispatch(addMyProduct(item));
    });
  }, []);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyProduct"
          component={MyProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
