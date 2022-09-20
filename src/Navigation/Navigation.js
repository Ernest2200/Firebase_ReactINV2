import React from 'react';
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
      screenOptions={{  AheaderTitleAlign: 'center', 
                        tabBarActiveTintColor:"#A30E00",
                        tabBarInactiveTintColor: "#646464"}}>
      <Tab.Screen
        name="Agregar Pelicula"
        component={Agregar}
        options={{
          tabBarLabel: 'Agregar colector',
          headerStyle: {
            backgroundColor: '#A30E00',
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
            backgroundColor: '#A30E00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size } )=> (
            <AntDesign name="bars" color={color} size={size} />
          ), 
        }}
      />


   
      
    </Tab.Navigator>
  );
}
