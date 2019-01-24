import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { ListItem, Icon } from 'native-base';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: '',
      time: '',
      date:''

    };
    this.onDateChange = this.onDateChange.bind(this);
  }



  text(time) {
  
    this.setState ({
        time: time

    });
    console.warn("time",time);
  
  }
  
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Preferred Schedule",
       headerLeft: <Icon name="ios-arrow-back" color="white" />,
       headerRight: <Icon name="ios-arrow-forward" color="white" />,
       
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

  onDateChange(date) {
    this.setState({
      selectedStartDate: date.toString(),
    });
    console.warn("date",this.state.selectedStartDate);
  }

  submit = () => {
  console.warn("inside the submit");
    fetch("http://192.168.0.94:8082/schedules", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "schedule_time": this.state.time,
        "requestdate": this.state.selectedStartDate
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
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>

{/*          
          <Text style={styles.welcome1}>Preferred Schedule</Text> */}
         
         <View style={styles.calendar}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          
        />
        </View>

        <View>
        <ListItem itemDivider>         
          <Text style={{marginLeft:70}}>{ startDate}</Text>
          </ListItem>
        </View>
         

         <View flexDirection='row'>
         <Image
        source={require('../images/mic.png')}
        style={{width: 30, height: 40, borderRadius: 10,marginLeft:10 }}>
        </Image> 
      <Text style={styles.welcome}> Radisson Sharjah</Text>
      </View>
      

         <View style={styles.time}>
         <TouchableOpacity>
         <Text onPress={()=> this.text('8-10 am')} style={styles.text}>8-10 am</Text>
         </TouchableOpacity>

         <TouchableHighlight background={TouchableNativeFeedback.Ripple('red')}>
         <Text onPress={()=> this.text('10-12 am')} style={styles.text1}>10-12 am</Text>
         </TouchableHighlight>

         <TouchableHighlight>
         <Text onPress={()=> this.text('12-2 pm')} style={styles.text1}>12-2 pm</Text>
         </TouchableHighlight>

         <TouchableHighlight>
         <Text onPress={()=> this.text('2-4 pm')} style={styles.text1}>2-4 pm</Text>
         </TouchableHighlight>
         </View>

          <View style={styles.time1}>
         <TouchableHighlight>
         <Text onPress={()=> this.text('4-6 pm')} style={styles.textt}>4-6 pm</Text>
         </TouchableHighlight>

         <TouchableHighlight>
         <Text onPress={()=> this.text('6-8 pm')} style={styles.text11}>6-8 pm</Text>
         </TouchableHighlight>

         <TouchableHighlight>
         <Text onPress={()=> this.text('8-10 pm')} style={styles.text2}>8-10 pm</Text> 
         </TouchableHighlight>
         </View> 
       

         <View style = {styles.lineStyle} />

         <View style={{ marginTop:5, width:150,height: 50,marginLeft:125}}>
        <Button
         title="Proceed to Pay"
         color="#bc9e6d"
         height= "90"
         onPress ={() => this.submit()}
         />
         </View>

        </View>
    )
  }
  

}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:15,
    width: 365,
 },
 welcome: {
 justifyContent:'center',
 fontFamily: 'Roboto',
 marginLeft: 5,
 fontSize: 25
},
time:{
  flexDirection:'row',
  margin: 10,
  marginLeft: 20
},
time1:{
  flexDirection:'row',
  margin: 5,

},
text:{
  fontSize: 15,
  marginLeft: 30
},
text1:{
  fontSize: 15,
  marginLeft: 20
},
textt:{
  fontSize: 15,
  marginLeft: 45
},
text11:{
  fontSize: 15,
  marginLeft: 30
},
text2:{
  fontSize: 15,
  marginLeft: 40
},
text4:{
  fontSize: 15,
  marginTop: 30,
  marginLeft: -200
},
text5:{
  fontSize: 15,
  marginTop: 30,
  marginLeft: -120
}

 
});
