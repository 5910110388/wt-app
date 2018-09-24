import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forcast from './Forcast';




export default class Weather extends React.Component {
  doIt = () => {
    console.log("Hello from console")
  }
  
    constructor(props){
        super(props);
        this.state = {
            forcast:{
                main: '-', description: '-', temp: 0
            }
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.layout}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forcast {...this.state.forcast} />
                </View>
                </ImageBackground>
            </View>
            
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 25

  },
  backdrop: {width: '100%', height: '100%'},

  layout:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '50%',
  }
});
