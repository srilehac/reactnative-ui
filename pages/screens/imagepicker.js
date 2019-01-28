import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component{

  state = {
    avatarSource:{},
  
  }


  img = () => {
    // const options = {
    //   title: 'Select Avatar',
    //   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };


    ImagePicker.showImagePicker( (response) => {
     // console.warn('Response = ', response);
     
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.warn("source", source)
        
        // You can also display the image using data:
         const sourceData = { uri: 'data:image/jpeg;base64,' + response.data };
         console.warn("sourceData ", sourceData)
       //  console.warn(sourceData);
       this.setState({
        avatarSource: sourceData,
      });
       
      }
    });
  }





  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onPress={() => this.img() } >To get started, edit App.js</Text>
        <Image source={this.state.avatarSource} style={{height:100, width:100}} />                                                                                                                            
      </View>
    );                                                                                                                            
  }                                                                                                             

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});