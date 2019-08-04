import React, { Component } from 'react';

import { TextInput, View, Image, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Titulo } from './styles'

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
      this.significado =  null;
      this.frase = null;
    }

    searchButton = () => {
      fetch( 'http://192.168.0.113:4545/dic/' + (this.titulo),{
        method: 'GET'
      }).then((resp) => {
          return resp.json();
      }).then((jsonNota) => {
        console.log(jsonNota);
        this.setState({apiResultado: jsonNota})
        console.log(this.state.apiResultado)
      }).done();
      //this.titulo = null;
    }

  render() {

    const nota = this.state.apiResultado;
    //variavel com função callback para mostrar atualização das anotações
    const notaDisplay = nota.map(function(jsonNota = {jsonNota}){
      return(
        <View key = {jsonNota.titulo}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Titulo style={{fontSize: 30}}>
              {jsonNota.titulo} 
            </Titulo>
            <Text>
              {jsonNota.significado} 
            </Text>
            <Text>
              {jsonNota.frase} 
            </Text>
          </View>
        </View>
      )}
    );

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Image source={require('../image/pesquisar.png')}/>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TextInput style={{height: 50, width: 350, fontSize: 23, backgroundColor: "gray", borderRadius: 10}} 
            onChangeText={(text)=>{ this.titulo = text }}
            />
            <Button title={'Buscar'} onPress={this.searchButton}/>
          </View>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', margin: 50}}
            onPress ={()=>  this.props.navigation.navigate('MostarPesquisa', {
              significado: notaDisplay

            }
              )}>
            <Text>{this.titulo}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
