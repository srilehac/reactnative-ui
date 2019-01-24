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
    this.onDayPress = this.onDayPress.bind(this);
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
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />

        <View>
        <ListItem itemDivider>         
          <Text>SELECTED DATE:{ startDate }</Text>
          </ListItem>
        </View>
         

       
        {/* <Image
        source={require('./images/mic.png')}
        style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 230, margin:20}}>
        </Image> */}
      <Text style={styles.welcome}> Radisson Sharjah</Text>
      

         <View flexDirection='row'>
         <Button 
             title="8-10 am" 
             backgroundColor= '#ffffff'
            
         />
         <Button 
             title="10-12 am" 
             backgroundColor= "#ffffff"
             overflow= 'hidden'
         />
         <Button 
             title="12-2 pm" 
             backgroundColor= '#ffffff'
             overflow= 'hidden'
         />
          <Button 
             title="2-4 pm" 
             backgroundColor= '#ffffff'
             overflow= 'hidden'
         />
          <Button 
             title="4-6 pm" 
             backgroundColor= '#ffffff'
             overflow= 'hidden'
         />
          <Button 
             title="6-8 pm" 
             fontColor= "black"
             backgroundcolor= '#ffffff'
             color="#ffffff"
         />
           <Button 
             title="8-10 pm" 
             textColor="black"
             color="#ffffff"
             overflow= 'hidden'
         />
         </View>

         <View style = {styles.lineStyle} />

         <View style={{ marginTop:5, width:150,height: 50,marginLeft:125}}>
        <Button
         title="submit"
         color="#bc9e6d"
         height= "50"
         onPress ={() => this.submit()}
         />
         </View>

        </View>
    )
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
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
    margin:30,
    width: 350,
 },
 welcome: {
 justifyContent:'center',
 fontFamily: 'Roboto',
 marginLeft: 40,
 fontSize: 25
},
 
});
