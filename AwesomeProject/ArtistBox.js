/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class ArtistBox extends Component {
  render() {
    const image ="http://3.bp.blogspot.com/-rW82-czaXxk/UyTwt3KdlNI/AAAAAAAAEk4/Fclshqbiku8/s1600/Front.jpg"
    const name = "Kemuri"
    const likes = 200
    const comments = 140
    return (

        <View style={styles.artistbox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="gray" />
              <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray"/>
              <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  artistbox: {
    backgroundColor: "white",
    flexDirection: "row"
  },
  image: {
    width: 150,
    height: 150
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count:{
    color: 'gray'
  }
});
