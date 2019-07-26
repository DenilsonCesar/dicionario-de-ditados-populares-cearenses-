import React, { useEffect } from 'react';

import { View, Text, Image, Dimensions } from 'react-native';

//import { Logo } from './styles'

export default function pages(props) {
    
useEffect(()=>{
  setTimeout(() => { props.navigation.navigate('Main')},500)
},[])

    return( 
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Image style={{flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
        source={require('../image/screen.png')}/>    
      </View>
    )
  }
