/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    TouchableHighlight,
} from 'react-native';



import RecItem from '../compoments/RecItem'
import Search from './Search'
 class RecScreen extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataSource: [
                {'name':'欢欢1123','address':'苏州','locationnum':'10km','picurl':'http://pic2.58.com/jiaoyou/yyw_img/207.jpg','isClick':false},
                {'name':'希希32132','address':'常州','locationnum':'1km','picurl':"http://pic2.58.com/jiaoyou/yyw_img/202.jpg",'isClick':false},
                {'name':'天天12123312','address':'无锡','locationnum':'100km','picurl':'http://pic1.58cdn.com.cn/jiaoyou/r/small/30779478992140/n_s12742795972874845156.jpg','isClick':false},
                {'name':'月月312123','address':'苏州','locationnum':'2000km','picurl':'http://pic1.58cdn.com.cn/jiaoyou/r/small/39756067962903/n_v1bl2lwxxmrfhfoeimjqra.jpg','isClick':false},
                {'name':'琳琳321312','address':'南京','locationnum':'1111km','picurl':'http://pic2.58.com/jiaoyou/yyw_img/211.jpg','isClick':false}
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
                underlayColor={'null'}
            >
                <Image
                    source={require('../images/search.png')}
                    style={{width:18,height:18,marginRight:6,marginTop:6}}
                />
            </TouchableHighlight>
        </View>
    })
     _onPress(){
         console.log(this.props)
         this.props.navigation.navigate('UserInfo')
     }
    render() {
        return (
            <FlatList
                style={styles.HomeMain}
                numColumns={2}
                data={this.state.dataSource}
                refreshing={this.state.refreshing}
                onRefresh={()=>{
                    console.log(123)
                }}

                renderItem={({item}) => <RecItem  address={item.address} localtionnum={item.locationnum} name={item.name} picurl={item.picurl} isClick={item.isClick} onPressItem={this._onPress.bind(this)} />}
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
