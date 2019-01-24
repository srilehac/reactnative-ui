
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';


 class payment extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Payment",
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
    return (
      <View style={styles.container}>

        <Text style={styles.text}>AMAN SERVICES</Text>

        <View style = {styles.lineStyle} />


        <View style={{fontSize:18, fontFamily:'Roboto',marginLeft:-148}}>
         <Text> FACP Communication Device</Text> 
        <Text >{`\n Assessment Fee Billing: `}</Text>
        </View> 

        <View style = {styles.lineStyle1} />

        <View style={{fontSize:18, fontFamily:'Roboto',marginLeft:-195}} >
        <Text>Assessment Charge​</Text>
        <Text>{`\nNo. of Buildings`}</Text>
        <Text style={{flexDirection:'row'}}>AED 250​</Text>
        <Text>{`\nTotal Charge​`}</Text>
        <Text>{`\nKnowledge Fees​`}</Text>
        <Text>{`\nExtra Fees​`}</Text>
        <Text>{`\nScientific Fees`}</Text>
        <Text>{`\nVAT`}</Text>
        </View>

        <View style = {styles.lineStyle3} />


        <View style={{ marginTop:50, width:200,height: 50}}>
        <Button
         title="Pay"
         color="#bc9e6d"
         height= "50"
         onPress ={() => this.submit()}
         />
         </View>

        </View>
       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: 'white',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    justifyContent:'center',
    marginLeft: -15
  },
  text:{
      fontFamily : 'Roboto',
      fontSize: 23,
      alignItems: 'flex-start',
      marginLeft:-118,
      fontWeight:'bold',
      margin:30
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    width: 350,
    margin:10
 },
 lineStyle1:{
    borderWidth: 0.5,
    borderColor:'black',
    width: 350,
    margin:10
 },
 lineStyle3:{
    borderWidth: 0.5,
    borderColor:'black',
    width: 350,
    margin:10
 },
});


export default payment