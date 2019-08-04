import React, { Component } from 'react';

import { View, Text, ScrollView, Button} from 'react-native';

export default class pages extends Component {
  render() {
    return(
        <View>
            <ScrollView>{ this.props.navigation.getParam('significado') }</ScrollView>
        </View>
    )
  }
}
