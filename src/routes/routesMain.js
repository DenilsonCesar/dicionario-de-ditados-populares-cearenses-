import {createStackNavigator } from 'react-navigation'

import Main from '../pages/main'
import SpleshScreen from '../pages/SpleshScreen'
import Search from '../pages/search'
import CompleteDictionary from '../pages/completeDictionary'
import MostarPesquisa from '../pages/mostrarPesquisa'

const App = createStackNavigator({
    SpleshScreen: { screen : SpleshScreen, 
        navigationOptions : {
            header: null
        }},
    Main: Main,
    Search: Search,
    CompleteDictionary: CompleteDictionary,
    MostarPesquisa: MostarPesquisa
})

export default App