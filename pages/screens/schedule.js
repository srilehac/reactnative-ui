import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
 
 class schedule extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
        <Image
        source={require('../images/loading.png')}>
        </Image>
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 }}>
             <Card>
            <CardItem header>
              <Text style={styles.title}>Thank You</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={styles.message}> Few of your buildings are 
                 compliant with the consent checklist.Few require assessment.
                </Text>
              </Body>
            </CardItem>
          </Card>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: 'white',
   justifyContent:'center',
   flexDirection: 'column'

  },
  container1: {
      flex: 1,
      backgroundColor: 'white',
    },
  button:{
      flex:1,
      height: 50,
      marginLeft: 70,
      marginRight: 70,
      margin: 20,
  
  },
  card:{
      flex:2,
      // alignItems: 'center',
      marginLeft: 60,
      // marginRight: 60,
      height: 10,
      width: 300,
      justifyContent:'center',
    
      
  },
  message:{

          fontSize: 23,
          fontFamily:'Roboto',
          textAlign: 'center'

  },
  title:{
       justifyContent:'center',
       marginLeft: 65,
       fontSize: 27,
       fontFamily:'Roboto'
  },

  });

export default schedule