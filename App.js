import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'


 import form from './pages/screens/form';
// import payment from './pages/screens/payment';
 import preferredschedule from './pages/screens/preferredschedule';
import calender from './pages/screens/calender';
// import example from './pages/screens/example';
// import schedule from './pages/screens/schedule';
// import loading from './pages/screens/loading';
 import sample from './pages/screens/sample';
 import addbuilding from './pages/screens/addbuilding';
 import assessment from './pages/screens/assessment';
 import image from './pages/screens/image';



const Navigator = createStackNavigator({
    Home: {
      screen: addbuilding
    
    },
    add: {
      screen: form
  },
});





const App = createAppContainer(Navigator);
export default App