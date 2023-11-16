import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import ProductDetails from '../Screens/ProductDetails';
import Search from '../Screens/Search';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab=createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen options={{tabBarIcon:<Ionicons name='person' size={25}/>}} name='Profile' component={Profile}/>
            <Tab.Screen name='Cart' component={Cart}/>
            <Tab.Screen name='ProductDetails' component={ProductDetails}/>
            <Tab.Screen name='Search' component={Search}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator