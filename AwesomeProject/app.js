/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {

  render() {
      const image ='http://3.bp.blogspot.com/-rW82-czaXxk/UyTwt3KdlNI/AAAAAAAAEk4/Fclshqbiku8/s1600/Front.jpg';
      const name='Kemuri';
    return (
      <View style={styles.container}>
       <View style={styles.artistbox}>
       <Image style={styles.image} 
       source={{uri: image}}/>
       <View style={styles.info}>
       <Text style={styles.name} >{name}</Text>
       </View>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  artistbox: {
      backgroundColor:'white',
      flexDirection: 'row'
  },
  info:{
      flex:1,
      flexDirection: 'row',
      justifyContent:'center'
  },
  name:{
    fontSize: 20,
    marginTop: 10
  },
  image: {
    width:150,
    height: 150
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
