import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { ListItem } from 'native-base';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Preferred Schedule",
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
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
       
        <View>

        <Calendar
          onDateChange={this.onDateChange}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />

        <View>
        <ListItem itemDivider>         
          <Text>SELECTED DATE:{ startDate}</Text>
          </ListItem>
        </View>
         

       
        {/* <Image
        source={require('./images/mic.png')}
        style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 230, margin:20}}>
        </Image> */}
      <Text style={styles.welcome}> Radisson Sharjah</Text>
      

         <View style={styles.time}>
         <Text style={styles.text}>8-10 am</Text>
         <Text style={styles.text1}>10-12 am</Text>
         <Text style={styles.text1}>12-2 pm</Text>
         <Text style={styles.text1}>2-4 pm</Text>
         <Text style={styles.text2}>2-4 pm</Text>
         {/* <Text style={styles.text1}>4-6 pm</Text>
         <Text style={styles.text1}>6-8 pm</Text>
         <Text style={styles.text1}>8-10 pm</Text> */}
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
    borderColor: '#eee',
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
    backgroundColor: 'gray'
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
 marginLeft: 40,
 fontSize: 25
},
time:{
  flexDirection:'row',
  margin: 10,
  marginLeft: 20
},
text:{
  fontSize: 15,
  marginLeft: 30
},
text1:{
  fontSize: 15,
  marginLeft: 20
},
text2:{
  fontSize: 15,
  marginTop: 30,
  marginLeft: -280
}
 
});
