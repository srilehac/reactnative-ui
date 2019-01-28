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
  Easing,
  ImageBackground
} from 'react-native';

  import { Card, CardItem, Body, CardTitle } from 'native-base';

class sample extends Component {
    constructor (props) {
        super(props) 
        this.state ={
            
        showMe: true,
        rotation:0
        }
        this.RotateValueHolder = new Animated.Value(0);
        }
    

componentWillMount() {
    setTimeout(() => {
         
        this.setState({
            showMe : false,
            rotation:this.state.rotation+1
        })

        
    }, 3000)

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
    {
    this.state.showMe ?
    // <ActivityIndicator size="large" color="#0000ff" />
    <View>
    <Animated.Image
        source={require('../images/loading.png')}
        style={{height: 100, width: 100,
        transform: [{ rotate: RotateData }]}}>
        </Animated.Image>
        <Text style={{fontSize: 20,fontFamily:'Roboto',justifyContent:'center',textAlign:'center',marginLeft:-115, margin:20}}>Please wait while we verify your readiness of your building</Text> 
        </View>
        
       
        :
    <View style={styles.container11}>

    <View style={styles.card}>
      <Card>
            <CardItem header>
              <Text style={styles.title}>Thank You</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={styles.message}> Few of your buildings are 
                 compliant with the consent checklist.Few require assessment.
                </Text>
              </Body>
            </CardItem>
          </Card>
          </View>

      <View style={styles.button}>
      <Button
         title="Proceed To Schedule"
         color="#bc9e6d"
         size="40"
         height="20"
         onPress ={() => this.submit()}
         />
         </View>

        </View>
       
}
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
      marginLeft: 150

    },
    container11: {
        flex: 1,
        backgroundColor: 'white',
      },
    button:{
        flex:1,
        height: 50,
        justifyContent: 'center',
        // marginRight: -10,
        //marginRight: -40,
        margin: -70,
        paddingLeft:-90,
        paddingRight:130,
        paddingBottom:90
    
    },
    card:{
        flex:2,
        // alignItems: 'center',
        paddingLeft:-90,
        paddingRight:210,
       margin: -90,
        height: 10,
        width: 500,
        justifyContent:'center',
      
        
    },
    message:{

            fontSize: 23,
            fontFamily:'Roboto',
            textAlign: 'center'

    },
    title:{
         justifyContent:'center',
         marginLeft: 65,
         fontSize: 27,
         fontFamily:'Roboto'
    },

    });


export default sample





