console.disableYellowBox = true
import { StackNavigator } from "react-navigation";

import Home from './src/pages/Home'
import Search from './src/pages/Search'
import UserInfo from './src/pages/UserInfo'

const App = StackNavigator({
    Home: {
        screen: Home,
    },
    Search: {
        screen: Search,
    },
    UserInfo: {
        screen: UserInfo,
    }


});

export  default  App;