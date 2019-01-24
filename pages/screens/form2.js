
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Button,CheckBox } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
//import { CheckBox } from 'react-native-elements';

//import { Icon } from 'native-base';

 class form2 extends Component {

    constructor(props){
        super(props);
        this.state={
     
          isChecked:false
        }
      }



  static navigationOptions = ({ navigation }) => {
    return {
      title: "Consent Form",
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
        <Text style={{marginLeft:50,fontSize: 18,justifyContent:'center',margin: 10}}>Fire Alarm Control Panel(FACP)in working condition? </Text>
        <View style={{flexDirection :'row', marginLeft: -60, marginRight:-60}}>
        <CheckBox
          title='Yes'
          onClick={()=>{
            this.setState({
                isChecked:!this.state.isChecked
            })
          }}
          isChecked={this.state.isChecked}
  // checked={this.state.checked}
          />
           <CheckBox
           
          title='No'
  // checked={this.state.checked}
          />
          </View>
        
        <View style = {styles.lineStyle} />
        <Text style={styles.welcome}>Annual Maintenance contract(AMC)</Text>
        <View style={{flexDirection :'row', marginLeft: -120}}>
        <CheckBox
          title='Yes'
  // checked={this.state.checked}
          />
           <CheckBox
           
          title='No'
  // checked={this.state.checked}
          />
          </View>
        <View style = {styles.lineStyle1} />
        <View style={{flexDirection:'row', marginLeft:86, marginRight:70}}>
        <CheckBox
        
        isChecked={this.state.checked}
          />
        <Text style={{fontFamily:'Roboto', fontSize:17}}>All the information provided above is true to the best of my knowledge. I understand I will be levied a penalty if found to be incorrect</Text> 
        </View>
       
         
        <View style={{ marginTop:50, width:150,height: 50}}>
        <Button
         title="submit"
         color="#bc9e6d"
         height= "50"
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
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:15,
    width: 350,
 },
 lineStyle1:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:15,
    width: 350,
 },
});


export default form2