import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Signup from './src/Signup';
import Navegation from './src/Navigation/Navigation';
  import Detalles from './src/Screens/Detalles';

const Stack = createStackNavigator();


function MyStack() { 
  return (
    <Stack.Navigator
      initialRouteName="Login"
      options={{ title: 'Login',headerStyle: {
              backgroundColor: '#6a51ae'
           } ,headerTintColor: '#fff',  }}
      barStyle={{ backgroundColor: '#6A5ACD' }}
      >
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
       options={{ title: 'Sign up',headerStyle: {
              backgroundColor: '#A30E00'
           } ,headerTintColor: '#fff',  }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Login',headerStyle: {
              backgroundColor: '#A30E00'
           } ,headerTintColor: '#fff',  }}
      />
      <Stack.Screen 
       name="Navegation" 
       component={Navegation} 
      options={{ title: 'Na',headerStyle: {
              backgroundColor: '#4682B4'
           } ,headerTintColor: '#fff',  },{ headerShown: false} }
      />

       <Stack.Screen name="Detalles" 
       component={Detalles} 
       options={{ title: 'Detalles',headerStyle: {
        backgroundColor: '#A30E00'
     } ,headerTintColor: '#fff',  }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}