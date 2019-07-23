import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class Main extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return (
         <ImageBackground style={{flex: 1, position: 'absolute' , width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={require('../image/Main.png')}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CompleteDictionary')}}
              style={{
                backgroundColor: '',
                height: 75, 
                width: 200, 
                borderRadius: 10, 
                justifyContent: 'center', 
                alignItems: 'center',
                marginLeft: 70,
                marginTop: 15
              }}>
              <Text
              style={{color: '#fff', fontSize: 20, fontFamily: 'arial', fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}}>DICIONÁRIO COMPLETO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search')}}
              style={{
                backgroundColor: '',
                height: 75, 
                width: 200, 
                borderRadius: 10, 
                justifyContent: 'center', 
                alignItems: 'center',
                marginLeft: 70,
                marginTop: 20
              }}>
              <Text
              style={{color: '#fff', fontSize: 20, fontFamily: 'arial', fontWeight: 'bold'}}>PESQUISAR</Text>
            </TouchableOpacity>
        </ImageBackground>  
    )
  }
}

export default Main;
