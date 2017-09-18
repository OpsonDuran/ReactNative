/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ArtistBox from './ArtistBox';

export default class AwesomeProject extends Component {
  render() {

    const artista = {
    image:'http://3.bp.blogspot.com/-rW82-czaXxk/UyTwt3KdlNI/AAAAAAAAEk4/Fclshqbiku8/s1600/Front.jpg',
    name: 'Kemuri',
    likes: 200,
    comments: 140,
    }

    return (
      <View style={styles.container}>
        <ArtistBox/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  }
});

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
