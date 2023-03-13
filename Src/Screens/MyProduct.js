import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToMyCart,removeMyCartItem,deleteMyCartItem} from '../Redux/MyCartSlice';
import { useNavigation } from '@react-navigation/native';
import { increaseQty ,decreaseQty} from '../Redux/MyProductSlice';

const MyProduct = () => {
  const myProducts = useSelector(state => state.product);
  const myCartProducts = useSelector(state => state.cart);


  const click=()=>{
    console.log("1")
    console.log("2")

    setTimeout(()=>{
      console.log("3")
    },2000)
    setTimeout(()=>{
      console.log("4")
    },0)
    
    console.log("5")
  }










  const navigation=useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    myCartProducts.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          elevation: 1,
          justifyContent: 'center',
        }}
      >
        <Text style={{fontSize: 22, fontWeight: '700', color: 'black'}}>
          Cart Demo
        </Text>
      </View>
      <FlatList
        data={myProducts}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                height: 120,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
                elevation: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  height: '70%',
                  width: 160,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                source={item.image}
              ></Image>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: '500'}}>{item.brand}</Text>
                <Text style={{color: 'green', fontWeight: '500', fontSize: 16}}>
                  ₹{item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}
                >
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id))
                      }}
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 8,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      <Text style={{color: 'white'}}>Add to cart</Text>
                    </TouchableOpacity>
                  ) : null}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity onPress={()=>{
                        if (item.qty>1) {
                        dispatch(removeMyCartItem(item))
                        dispatch(decreaseQty(item.id))
                        
                            
                        }else{
                            dispatch(deleteMyCartItem(item.id))
                            dispatch(decreaseQty(item.id))
                        }
                    }} 
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 8,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{color: 'white'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text style={{fontSize: 16, marginLeft: 10}}>{item.qty}</Text>
                  )}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity  onPress={()=>{
                        dispatch(addProductToMyCart(item))
                        dispatch(increaseQty(item.id))
                    }}
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 8,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{color: 'white'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />

      {myCartProducts.length>0?(  <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            {'Added Items' + '(' + myCartProducts.length + ')'}
          </Text>
          <Text>{'Total :' + getTotal()}</Text>
        </View>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <TouchableOpacity onPress={()=>{
            click()
            navigation.navigate('MyCart')
          }}
            style={{
              width: '70%',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
              height:35
            }}
          >
            <Text style={{color:'white'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View>):null}
    
    </View>
  );
};
export default MyProduct;
 