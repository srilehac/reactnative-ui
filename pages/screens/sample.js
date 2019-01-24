import React , {Component}from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image
} from 'react-native';

  import { Card, CardItem, Body, CardTitle } from 'native-base';

class sample extends Component {
    constructor (props) {
        super(props) 
        this.state ={
        showMe: true,
        rotation:0
        }
        }
    

componentWillMount() {
    setTimeout(() => {
         
        this.setState({
            showMe : false,
            rotation:this.state.rotation+1
        })
    
    }, 3000)
}

render() {
return(
<View style={styles.container}>
    {
    this.state.showMe ?
    // <ActivityIndicator size="large" color="#0000ff" />
    <Image
        source={require('../images/loading.png')}
        rotation={this.state.rotation}>
       </Image> 
     :
    <View style={styles.container1}>

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
     justifyContent:'center',
     flexDirection: 'column'

    },
    container1: {
        flex: 1,
        backgroundColor: 'white',
      },
    button:{
        flex:1,
        height: 50,
        marginLeft: 70,
        marginRight: 70,
        margin: 20,
    
    },
    card:{
        flex:2,
        // alignItems: 'center',
        marginLeft: 60,
        // marginRight: 60,
        height: 10,
        width: 300,
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





