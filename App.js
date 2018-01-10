


console.disableYellowBox = true


import { StackNavigator } from "react-navigation";

import Home from './src/pages/Home'
import Search from './src/pages/Search'
import ChatWindow from './src/pages/ChatWindow'

const App = StackNavigator({
    Home: {
        screen: Home,
    },
    Search: {
        screen: Search,
    }
    ,
    ChatWindow: {
        screen: ChatWindow,
    }


});

export  default  App;