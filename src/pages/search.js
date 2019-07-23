import React, { Component } from 'react';

import { TextInput, View, Image, Button, ScrollView } from 'react-native';

export default class pages extends Component {
  constructor(props){
    super(props)
    this.state = {
      //vetor para receber uma tupla do banco de dados
      apiResultado: [],
      //naNota: [],
    }
    //Componentes criados para receber valores do banco de dados
      this.titulo = null;
    }

    searchButton = () => {
      fetch( "http://localhost:4545/dic" + (this.titulo),{
        method: 'GET'
      }).then((resp) => {
          return resp.json();
      }).then((jsonNota) => {
        console.log(jsonNota);
        this.setState({apiResultado: jsonNota})
        console.log(this.state.apiResultado)
      }).done();
      this.titulo = null;
    }

  render() {

    const nota = this.state.apiResultado;
    //variavel com função callback para mostrar atualização das anotações
    let notaDisplay = nota.map(function(jsonNota = {jsonNota}){
      return(
        <View key = {jsonNota.titulo}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'blue'}}>{jsonNota.titulo} | </Text>
          </View>
        </View>
      )}
    );

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Image source={require('../image/pesquisar.png')}/>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TextInput style={{height: 50, width: 350, fontSize: 23, backgroundColor: "gray", borderRadius: 10}}/>
            <Button title={'Buscar'} onPress={this.searchButton}/>
          </View>
          <ScrollView>{notaDisplay}</ScrollView>
      </View>
    )
  }
}
