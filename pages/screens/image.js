import React , {Component}from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image,
  Animated,
  Easing
} from 'react-native';

  import { Card, CardItem, Body, CardTitle } from 'native-base';

class image extends Component {
    constructor (props) {
        super(props) 
    
            this.RotateValueHolder = new Animated.Value(0);
       
        }


// componentWillMount() {
//     setTimeout(() => {
         
//         this.setState({
          
//             rotation:90
//         })
    
//     }, 3000)
// }

componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }

render() {

    const RotateData = this.RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
    return(
    <View style={styles.container}>
    <Animated.Image
        source={require('../images/loading.png')}
        style={{height: 150, width: 150,
        transform: [{ rotate: RotateData }]}}>
       </Animated.Image>
       </View>

);

}
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: 'white',
     //justifyContent:'center',
    //  flexDirection: 'column'
      justifyContent:'center',
      marginLeft: 130

    }

});


export default image