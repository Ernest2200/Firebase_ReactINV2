import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  TextInput,
} from 'react-native';
import { Input } from 'react-native-elements';
import firebase from '../conexion/database';
import color from '../utils/colors';
import { Avatar } from 'react-native-elements';
export default class Detalles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: this.props.route.params.nombres,
      foto: this.props.route.params.foto,
      key: this.props.route.params.key,
      descripcion: this.props.route.params.descripcion,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  modificar = (key) => {
    if (this.state.nombres.trim() == '') {
      Alert.alert('Error', 'Ingrese un nombre de colector');
    } else if (this.state.descripcion.trim() == '') {
      Alert.alert('Error', 'Ingrese una descripción de colector');
    } else if (this.state.foto.trim() == '') {
      Alert.alert('Error', 'Ingrese una url de imagen de colector');
    } else {
      firebase
        .firestore()
        .collection('peliculas')
        .doc(key)
        .update({
          nombre: this.state.nombres,
          descripcion: this.state.descripcion,
          url: this.state.foto,
        })
        .then(() => {
          Alert.alert('Éxito', 'El registro ha sido modificado');
          this.props.navigation.navigate('Lista de peliculas');
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }
  };

  eliminar = (key) => {
    const db = firebase.firestore();
    db.collection('peliculas')
      .doc(key)
      .delete()
      .then(() => {
        Alert.alert('Éxito', 'El registro ha sido eliminado');
        this.props.navigation.navigate('Lista de peliculas');
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={color.BLUE} translucent={true} />
        <View style={styles.espacio}>
          <Text style={styles.title}>Detalles del colector</Text>
        </View>
        <Input
          placeholder="Nombre colector"
          value={this.state.nombres}
          onChangeText={(val) => this.updateInputVal(val, 'nombres')}
        />

        <Input
          placeholder="Descripción de colector"
          value={this.state.descripcion}
          onChangeText={(val) => this.updateInputVal(val, 'descripcion')}
        />

        <Input
          placeholder="Url de imagen"
          value={this.state.foto}
          onChangeText={(val) => this.updateInputVal(val, 'foto')}
        />

        <View style={styles.cajita3}>
          <View style={styles.espacio}>
            <Button
              style={styles.boton}
              color="#d32f2f"
              title="Eliminar colector"
              onPress={() => this.eliminar(this.state.key)}
            />
          </View>

          <View style={styles.espacio}>
            <Button
              style={styles.boton}
              title="Modificar colector"
              onPress={() => this.modificar(this.state.key)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,

    textAlign: 'center',
  },
  boton: {
    margin: 10,
  },

  cajita3: {
    height: 50,
    width: 300,
    margin: 5,

    alignItems: 'center',
  },
  espacio: {
    margin: 5,
  },
});
