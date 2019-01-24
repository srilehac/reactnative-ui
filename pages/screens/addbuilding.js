import React , {Component} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image,
  FlatList
} from 'react-native';
import { Card, CardItem, Body} from 'native-base';

import { Icon } from 'react-native-elements'


class addbuilding extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            datasource:[]
          }
        }

        renderItem = ({item}) => {
            return (
                <View>

                <Card>
                <CardItem>
                <Body>

                   <Text style={{ flex:1}}>
                      {item.name}
                   </Text>
  
                   <Text onPress={()=> this.text('Book Service')}  style={{ flex:1, flexDirection:'row'}}>
                   Book Service</Text>

                   <Text onPress={()=> this.text('Assessment Service')}  style={{ flex:1, flexDirection:'row'}}>
                   Assessment Service</Text>
              
                </Body>
                </CardItem>
                </Card>

                </View>
            )
        }

        componentDidMount() {
          fetch ()
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              dataSource : responseJson.name
            })
          
          })
          .catch((error) => {
            console.log(error)
          })
        }
    
        static navigationOptions = ({ navigation }) => {
            return {
              title: "My Building List",
               //headerLeft: <Icon name="ios-arrow-back" color="white" />,
              headerStyle: {
                backgroundColor: "#ffffff",
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
                borderTopColor: "#ffffff",
                
              },
              headerTitleStyle: {
                color: "#9b9b9b",
                textAlign: 'center', flex:1,
                
              }
            };
          };


        render() {

            return(

                <View style={styles.container}>

                <View style={ styles.container1 }>
                <Image
                  source={require('../images/plus.png')}
                  style={{flexDirection:'row'}}>
                 </Image> 
                 {/* <Icon
              name='control_point'
         
              color='#517fa4'
             /> */}
                 <Text style={styles.text1}> Add Building </Text>
                 </View>
                
                <View style={styles.card}>

                  <Card>

                   <Text style={styles.text}>
                      Radisson Singh
                   </Text>

                    <View style={{flexDirection:'row', padding: 20, justifyContent: 'space-around'}}>
                   <Text onPress={()=> this.text('Book Service')} style={{marginLeft: -30, fontFamily:'Roboto', fontSize: 18 }}>
                   Book Service</Text>

                   <Text  onPress={()=> this.text('Assessment Service')} style={{marginRight:-40, fontFamily: 'Roboto', fontSize: 18}}  >
                   Assessment Service</Text>
                  
                   </View>

                   </Card>
                </View>

                    <FlatList
                     data={this.state.datasource}
                     renderItem={this.state.renderitem}
                     />
   
                </View>
             
               
                  );

                 }

  }


const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: 'white',
   
    },
    container1: {
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
     flexDirection:'row',
     marginTop: 25,
     marginLeft: 25
   
    
    },
    text:{
      fontSize: 23,
      fontFamily: 'Roboto',
      margin: 5,
      marginLeft: 13,
      fontWeight:'bold'
   
    },
    card :{
      flex:3,
       margin:10,
       padding: 10,
       backgroundColor: 'white',
       marginTop: -80,
       
     
     },
     text1:{

      fontSize: 23,
      fontFamily: 'Roboto',
     
     },
    // card:{
    
      
    //   marginLeft: 60,
    //   // marginRight: 10,
    //   width: 50,
    //   height: 10
    // },
  
  // card:{
  //        marginTop: 50,
  //        marginLeft: -160,
  //        margin: 10,
  //        marginRight: -200

  // }
 
    


    });


export default addbuilding





