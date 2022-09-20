import React, { useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  Alert,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign, Foundation } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../conexion/database';
import 'firebase/firestore';

const db = firebase.firestore(firebase);

export default function Agregar({props,navigation}) {
  const [formData, setFormData] = useState({});
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  const reset = () => {
    formData.nombre = '';
    formData.descripcion = '';
    formData.url = '';
  };

  const onSubmit = () => {
    if (!formData.nombre) {
      Alert.alert('Error', 'Por favor ingrese el nombre del colector');
    } else if (!formData.descripcion) {
      Alert.alert('Error', 'Por favor ingrese la descripción del colector');
    } else if (!formData.url) {
      Alert.alert(
        'Error',
        'Por favor ingrese el url de la imagen del colector'
      );
    } else if (
      formData.nombre.trim() == '' ||
      formData.descripcion.trim() == '' ||
      formData.url.trim() == ''
    ) {
      Alert.alert('Error', 'No se permiten campos en blanco');
    } else {
      const data = formData;
      db.collection('peliculas')
        .add(data)
        .then(() => {
          Alert.alert('Éxito', 'Colector agregado con éxito');
          this.props.navigation.navigate('Lista de colectores');
          reset();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <ScrollView>
      <View style={styles.cajita3}>
        <View style={styles.cajita}>
          <Text style={styles.title}>Agregar colector</Text>
          <Input
            placeholder="Nombre pelicula"
            onChange={(e) => onChange(e, 'nombre')}
          />

          <Input
            placeholder="Genero de pelicula"
            onChange={(e) => onChange(e, 'descripcion')}
          />

          <Input
            placeholder="Url de imagen"
            onChange={(e) => onChange(e, 'url')}
          />
          <View style={styles.cajita2}>
            <Button
            color="#4682B4"
              title="Agregar pelicula"
             
              onPress={onSubmit}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cajita: {
    margin: 30,
    marginTop: 150,
  },
  cajita2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajita3: {
    backgroundColor: 'white',
    height: 587,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  boton: {
    height: "100%",
    width: "100%",
  },
});
