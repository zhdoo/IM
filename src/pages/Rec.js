/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';


import { StackNavigator } from "react-navigation";



import RecItem from '../compoments/RecItem'
import Search from './Search'
 class RecScreen extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {'name':'欢欢1123','picurl':'http://pic2.58.com/jiaoyou/yyw_img/207.jpg','isClick':false},
                {'name':'希希32132','picurl':"http://pic2.58.com/jiaoyou/yyw_img/202.jpg",'isClick':false},
                {'name':'天天12123312','picurl':'http://pic1.58cdn.com.cn/jiaoyou/r/small/30779478992140/n_s12742795972874845156.jpg','isClick':false},
                {'name':'月月312123','picurl':'http://pic1.58cdn.com.cn/jiaoyou/r/small/39756067962903/n_v1bl2lwxxmrfhfoeimjqra.jpg','isClick':false},
                {'name':'琳琳321312','picurl':'http://pic2.58.com/jiaoyou/yyw_img/211.jpg','isClick':false}
            ]
        };
    }
    static navigationOptions = ({navigation}) => ({
        title: '推荐',
        headerRight:<View>
            <TouchableHighlight
                style={{width:30,height:30,marginRight:5}}
                                onPress={()=>{
                                    navigation.navigate('Search')
                                    console.log(navigation)
                                }}
            >
                <Image
                    source={require('../images/search.png')}
                    style={{width:18,height:18,marginRight:6,marginTop:6}}
                />
            </TouchableHighlight>
        </View>
    })
     _onPress(){
         console.log(123)
         console.log(this.props)
         this.props.navigation.navigate('ChatWindow')
     }
    render() {
        return (
            <FlatList
                style={styles.HomeMain}
                numColumns={2}
                data={this.state.dataSource}
                renderItem={({item}) => <RecItem  name={item.name} picurl={item.picurl} isClick={item.isClick} onPressItem={this._onPress.bind(this)} />}
            />

        );
    }
}





const  styles=StyleSheet.create({

    HomeMain:{
        backgroundColor:'#ddd',
    }

})

export default  RecScreen
