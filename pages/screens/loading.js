import React, { Component } from 'react';
import { View, Text, Image, Animated } from 'react-native';

class loading extends Component {
    constructor(props) {
      super(props);
       
      
      this.loadingSpin = new Animated.Value(0);
     

    }
  
    spinAnimation() {
        this.loadingSpin.setValue(0);
        Animated.sequence([
            Animated.timing(
                this.loadingSpin,
                {
                    toValue : 1 ,
                    duration: 1000
                }
            )
        ]).start(() => this.spinAnimation());

    }

    componentDidMount(){
        this.spinAnimation();
    }

    render() {
        const spin =this.loadingSpin.interpolate({
            inputRange: [0,1],
            outputRange: [ '0deg' , '360deg']
                
            
        });

      return (<View style={{ opacity: (this.props.show || true) ? 1 : 0}}>
      <Animated.Image style={{ transform: [{ rotate: spin }] }} source={require('../images/loading.png')} /> 
      </View>);

    }

    }


export default loading