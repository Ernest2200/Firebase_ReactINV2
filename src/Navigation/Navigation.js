import React from 'react';
//import HomeStack from './HomeStack';
//import AboutStack from './AboutStack';
//import ContactStack from './ContactStack';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Lista from '../Screens/Lista';
import Agregar from '../Screens/Agregar';
import Detalles from '../Screens/Detalles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Agregar colector"
      screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Agregar colector"
        component={Agregar}
        options={{
          tabBarLabel: 'Agregar colector',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Lista de peliculas"
        component={Lista}
        options={{
          tabBarLabel: 'Lista de peliculas',
          headerStyle: {
            backgroundColor: '#42A5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />


   
      
    </Tab.Navigator>
  );
}
