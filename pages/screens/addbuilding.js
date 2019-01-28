import React , {Component} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image,
  FlatList,
  ScrollView 
 
} from 'react-native';
import { Card, CardItem, Body} from 'native-base';

import { Icon } from 'react-native-elements'
// import { ScrollView } from 'react-native-gesture-handler';


class addbuilding extends Component {
    constructor (props) {
        super(props) 
        this.state = {
           result:[]
          }
        }

        // renderItem = ({item}) => {
        //     return (
        //         <View>

        //         <Card>
        //         <CardItem>
        //         <Body>

        //            <Text style={{ flex:1}}>
        //               {item.name}
        //            </Text>
  
        //            <Text onPress={()=> this.text('Book Service')}  style={{ flex:1, flexDirection:'row'}}>
        //            Book Service</Text>

        //            <Text onPress={()=> this.text('Assessment Service')}  style={{ flex:1, flexDirection:'row'}}>
        //            Assessment Service</Text>
              
        //         </Body>
        //         </CardItem>
        //         </Card>

        //         </View>
        //     )
        // }

        componentDidMount() {

          this.makeRequest();
         
        }

  makeRequest = () => {

    console.warn("inside the submit");
          fetch("http://192.168.0.94:8082/getBuildings", {
          method: "POST",
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
    })
      .then(r => r.json())
      .then(result => {
        //console.warn("result",result);
      
        // const response = Object.values(result);
        // console.warn("response",response);
        // console.warn("result of data:", result);
         console.warn("result",result.result)
         var data = result.result
        this.setState({
         
          result: data
          
        });
      })
      .catch(error => {
        console.warn("data Error", error);
      });


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
                  style={{flexDirection:'row'}}
                  onPress onPress={()=> this.text('Book Service')}>
                 </Image> 
                 {/* <Icon
              name='control_point'
         
              color='#517fa4'
             /> */}
                 <Text style={styles.text1}> Add Building </Text>
                 </View>
 
                  <ScrollView>
                    <View style={{height:250}}>
                 <FlatList
                    data={this.state.result}
                    keyExtractor={item => item.owner_id}
                    renderItem={({ item}) => ( 
                <View style={styles.card}>
                    
                  <Card>
                     <Text style={styles.text}>
                     {item.Buildingname}
                   </Text>
                 
                    <View style={{flexDirection:'row', padding: 20, justifyContent: 'space-around'}}>
                   <Text onPress={()=> this.text('Book Service')} style={{marginLeft: -30, fontFamily:'Roboto', fontSize: 18 }}>
                   Book Service</Text>
                   <Text  onPress={()=> this.text('Assessment Service')} style={{marginRight:-40, fontFamily: 'Roboto', fontSize: 18}}  >
                   Assessment Service</Text>
                   </View>
                   </Card>
                  </View>
                    )
                    }
                   
                   />
                   </View>
              </ScrollView>

                    {/* <FlatList
                     data={this.state.datasource}
                     renderItem={this.state.renderitem}
                     /> */}
                   
                   <View style={styles.button}> 
                  <Button
                    title="Upload Bulk Building List"
                    color="#bc9e6d"
                    height= "90"
                    onPress ={() => this.submit()}
                   />
                 <Text style={{fontSize:15, fontFamily:'Roboto',justifyContent:'center',color:'#9b9b9b', margin:15, textAlign:'center'}}> Tutorial on uploading Bulk Building List</Text>
                 <Text style={{fontSize:15, fontFamily:'Roboto',justifyContent:'center',color:'#bc9e6d',textAlign:'center',marginTop: 10}}> Download .csv Template</Text>
                </View>
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
      fontWeight:'bold',
      color:'black'
   
    },
    card :{
      flex:2,
      //  margin:10,
       padding: 5,
       backgroundColor: 'white',
      //  marginTop: -80,
       
     
     },
     text1:{

      fontSize: 23,
      fontFamily: 'Roboto',
     
     },
     button:{
       flex:2,
       backgroundColor: 'white',
       marginLeft: 80,
       marginRight: 80,
       height: 10,
      
       


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





