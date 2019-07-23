import {createStackNavigator } from 'react-navigation'

import Main from '../pages/main'
import SpleshScreen from '../pages/SpleshScreen'
import Search from '../pages/search'
import CompleteDictionary from '../pages/completeDictionary'

const App = createStackNavigator({
    SpleshScreen: { screen : SpleshScreen, 
        navigationOptions : {
            header: null
        }},
    Main: Main,
    Search: Search,
    CompleteDictionary: CompleteDictionary
})

export default App