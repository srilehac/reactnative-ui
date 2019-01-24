
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { CheckBox } from 'react-native-elements';

//import { Icon } from 'native-base';

 class form extends Component {

    constructor (props) {
        super(props);
        this.state = {
          check5: false,
          check1:false,
          check2:false,
          check3:false,
          check4:false,
          facp_working_condition:0,
          facp_readiness:0,
          annual_maintenance_contract:0

        };
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

  chkBoxCondition = (chkName) =>{

    if(chkName === "chk1"){

        this.setState({
            check1: true,
            check2: false,
            facp_working_condition:1
        })
    }
    else if(chkName === "chk2"){

        this.setState({
            check1: false,
            check2: true,
            facp_working_condition:0
        })
    }

    if(chkName === "chk3"){
        this.setState({
            check3: true,
            check4: false,
            facp_readiness:1
        })
    }

    else if(chkName === "chk4"){
        this.setState({
            check3: false,
            check4: true,
            facp_readiness:0
        })
    }

    if(chkName === "chk5"){
        this.setState({
            check5: !this.state.check5
        })
        if(this.state.check5 === true){

        this.setState({
            annual_maintenance_contract:0
        })

        }
        else{

            this.setState({
                annual_maintenance_contract:1
            })

        }
    }
  }


  submit = () => {
    // const url = "localhost:1003/listOfSalons";
  console.warn("inside the submit");
    fetch("http://192.168.0.94:8082/consentform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "consent_id":"122",
        "facp_working_condition":this.state.facp_working_condition,
        "facp_readiness":this.state.facp_readiness,
        "annual_maintenance_contract":this.state.annual_maintenance_contract
      })
    })
      .then(r => r.json())
      .then(result => {
        console.warn("result of data:", result);
 
        this.setState({
          dataSource: result
        });
      })
      .catch(error => {
        console.warn("data Error", error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginLeft:50,fontSize: 18,justifyContent:'center',margin: 10}}>Fire Alarm Control Panel(FACP)in working condition? </Text>
        
        <View style={{flexDirection :'row', marginLeft: -120}}>
        <CheckBox
          title='Yes'
          checked={this.state.check1}
                  onPress={() => this.chkBoxCondition("chk1")
            }
          />

           <CheckBox
          title='No'
          checked={this.state.check2}
                  onPress={() => this.chkBoxCondition("chk2")
            }
          />
          </View>
        
        <View style = {styles.lineStyle} />
        <Text style={styles.welcome}>Annual Maintenance contract(AMC)</Text>
        <View style={{flexDirection :'row', marginLeft: -120}}>
        <CheckBox
          title='Yes'
          checked={this.state.check3}
          onPress={() => this.chkBoxCondition("chk3")
    }
          />

           <CheckBox
          title='No'
          checked={this.state.check4}
          onPress={() => this.chkBoxCondition("chk4")
            }
          />
          </View>

        <View style = {styles.lineStyle1} />
        
        <View style={{flexDirection:'row', marginLeft:86, marginRight:70}}>
        <CheckBox
        
        checked={this.state.check5}
        onPress={() => this.chkBoxCondition("chk5")}
          />
        <Text style={{fontFamily:'Roboto', fontSize:17}}>All the information provided above is true to the best of my knowledge. I understand I will be levied a penalty if found to be incorrect</Text> 
        </View>
       
         
        <View style={{ marginTop:50, width:150,height: 50}}>
        <Button
         title="submit"
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


export default form