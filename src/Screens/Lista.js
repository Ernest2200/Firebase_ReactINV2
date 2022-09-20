import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  StatusBar,
  Image,
} from 'react-native';
import { ListItem, Avatar, Divider } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import firebase from '../conexion/database';
import color from '../utils/colors';
import { query, where, orderBy } from 'firebase/firestore';

class Lista extends Component {
  constructor() {
    super();

    this.firestoreRef = firebase.firestore().collection('peliculas');
    this.state = {
      isLoading: true,
      reserArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const reserArr = [];
    const allArr = [];
    querySnapshot.forEach((res) => {
      const { nombre, descripcion, url } = res.data();

      allArr.push({
        key: res.id,
        res,
        nombre,
        url,
        descripcion,
      });
      console.log(allArr);
    });
    this.setState({
      reserArr,

      allArr,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#377bff" />
        </View>
      );
    }
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <StatusBar backgroundColor={color.BLUE} translucent={true} />
          <ScrollView style={{ marginLeft: -10 }}>
            {this.state.allArr.length == 0 ? (
              <View style={styles.msgerror}>
                <Text style={styles.textStyle}>No hay peliculass</Text>
              </View>
            ) : (
              this.state.allArr.map((item, i) => {
                return (
                  console.log(item.nombres),
                  (
                    <ListItem
                    
                      bottomDivider
                      style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 2,
                        
                        
                      }}
                      onPress={() => {
                         this.props.navigation.navigate('Detalles', {
                          nombres: item.nombre,
                          foto: item.url,
                          key: item.key,
                          descripcion: item.descripcion,
                        });
                      }}>
                      <Avatar
                        size="xlarge"
                        source={{
                          uri: item.url,
                        }}
                      />

                      <ListItem.Content >
                        <ListItem.Title>{item.nombre}</ListItem.Title>
                        <ListItem.Subtitle>
                          {item.descripcion}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  )
                );
              })
            )}
          </ScrollView>
        </View>
        <View></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  msgerror: {
    justifyContent: 'center',
    alignItems: 'center',
    margintop: 100,
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#377bff',
    color: 'white',
  },
});

export default Lista;
