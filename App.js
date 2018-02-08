console.disableYellowBox = true
import { StackNavigator } from "react-navigation";

import Home from './src/pages/Home'
import Search from './src/pages/Search'
import UserInfo from './src/pages/UserInfo'
import SpecilServe from './src/pages/SpecilServe'
import ChengXin from './src/pages/ChengXin'
import ChatWindow from './src/pages/ChatWindow'
import Chats from './src/pages/Chats'

const App = StackNavigator({
    Home: {
        screen: Home,
    },
    Search: {
        screen: Search,
    },
    UserInfo: {
        screen: UserInfo,
    },
    SpecilServe: {
        screen: SpecilServe,
    },
    ChengXin: {
        screen: ChengXin,
    }
    ,
    ChatWindow: {
        screen: ChatWindow,
    }
    ,
    Chats: {
        screen: Chats,
    }


});

export  default  App;