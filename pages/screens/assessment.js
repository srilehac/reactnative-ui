import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image,
  FlatList
} from "react-native";
import { Card, CardItem, Body, Icon  } from "native-base";


// import { Icon } from "react-native-elements";

class addbuilding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: []
    };
  }

  // renderItem = ({item}) => {
  //     return (
  //         <View>

  //         <Card>
  //         <CardItem>
  //         <Body>

  //            <Text style={{ flex:1}}>
  //               {item.name}
  //            </Text>

  //            <Text onPress={()=> this.text('Book Service')}  style={{ flex:1, flexDirection:'row'}}>
  //            Book Service</Text>

  //            <Text onPress={()=> this.text('Assessment Service')}  style={{ flex:1, flexDirection:'row'}}>
  //            Assessment Service</Text>

  //         </Body>
  //         </CardItem>
  //         </Card>

  //         </View>
  //     )
  // }

//   componentDidMount() {
//     console.warn("inside the submit");
//     fetch("http://192.168.0.94:8082/AddsingleBuilding", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       }
//     })
//       .then(r => r.json())
//       .then(result => {
//         console.warn("result", result);
//         const response = Object.values(result);
//         console.warn("response", response);
//         // console.warn("result of data:", result);

//         this.setState({
//           dataSource: result
//         });
//       })
//       .catch(error => {
//         console.warn("data Error", error);
//       });
//   }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Assignments",
      headerLeft: <Icon name="menu" color="white" />,
      headerStyle: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        borderTopColor: "#ffffff"
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: "center",
        flex: 1
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
           <Image
            source={require("../images/plus.png")}
            style={{ flexDirection: "row"}}
          /> 
          <Text style={styles.text1}> Accepted </Text>
           <Image
            source={require("../images/plus.png")}
            style={{ flexDirection: "row", marginLeft:30 }}
          /> 
          <Text style={styles.text1}> Pending </Text>
        </View>

        <View style={styles.card}>
          {/* <FlatList */}
            {/* renderItem={({ item }) => ( */}
              <Card>
                  <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Radisson sharjah</Text>
                <Image
                 source={require("../images/plus.png")}
                 style={{ marginLeft:120, margin: 5 }}
                 />
                 </View>

                <View
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-around"
                  }}
                >
                  <Text
                    onPress={() => this.text("6-1-2019")}
                    style={{
                      marginLeft: -80,
                      fontFamily: "Roboto",
                      fontSize: 18,
                      margin:1
                    }}
                  >
                    6-1-2019
                  </Text>
                  <Text
                    onPress={() => this.text("6-8 pm")}
                    style={{
                      marginRight: -85,
                      fontFamily: "Roboto",
                      fontSize: 18
                    }}
                  >
                    6-8 pm
                  </Text>
                </View>
              </Card>
            {/* )}
           />  */}
        </View>

        <View style={styles.button}>
          <Button
            title="Next"
            color="#bc9e6d"
            height="90"
            onPress={() => this.submit()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 25
  },
  text: {
    fontSize: 23,
    fontFamily: "Roboto",
    margin: 5,
    marginLeft: 13,
    fontWeight: "bold",
    flexDirection: 'row'
    
  },
  card: {
    flex: 2,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    marginTop: -80,
    
  },
  text1: {
    fontSize: 23,
    fontFamily: "Roboto",
    justifyContent:"space-around"
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 90,
    marginRight: 90,
    height: 20,
    marginTop: 30
  }
  // card:{

  //   marginLeft: 60,
  //   // marginRight: 10,
  //   width: 50,
  //   height: 10
  // },

  // card:{
  //        marginTop: 50,
  //        marginLeft: -160,
  //        margin: 10,
  //        marginRight: -200

  // }
});

export default addbuilding;
