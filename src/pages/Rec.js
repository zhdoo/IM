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
    Text,
    StatusBar,
    FlatList,
    TouchableHighlight, Dimensions,
} from 'react-native';

import RecItem from '../compoments/RecItem'
import Search from './Search'
const height=Dimensions.get('window').height
import Toast, {DURATION} from 'react-native-easy-toast'
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
        headerStyle:{
            backgroundColor:'#FF66CC',
        },
        headerTitleStyle:{
          color:'#fff'
        },
        headerRight:
            <View>
            <TouchableHighlight
                style={{width:30,height:30,marginRight:5}}
                onPress={()=>{
                    navigation.navigate('Search')
                    console.log(navigation)
                }}
                underlayColor='rgba(0,0,0,0)'
            >
                <Image
                    source={require('../images/search.png')}
                    style={{width:24,height:24,marginRight:3,marginTop:3}}
                />
            </TouchableHighlight>
        </View>

    })
     _onPress(){
         console.log(this.props)
         this.props.navigation.navigate('UserInfo')
     }
     onPressHi(){
         this.refs.toast.show('打招呼成功!',DURATION.LENGTH_LONG);
     }
    render() {
        return (
            <View>
            <StatusBar
                barStyle="light-content"
            />

            <FlatList
                style={styles.HomeMain}
                numColumns={2}
                data={this.state.dataSource}
                refreshing={this.state.refreshing}
                onRefresh={()=>{
                    console.log(123)
                }}
                renderItem={({item}) => <RecItem  address={item.address} localtionnum={item.locationnum} toastInfo={this.onPressHi.bind(this)} name={item.name} picurl={item.picurl} isClick={item.isClick} onPressItem={this._onPress.bind(this)} />}
            />
                <Toast ref="toast"
                       position='top'
                       positionValue={height/3}

                       fadeInDuration={500}
                       fadeOutDuration={500}
                       opacity={0.8}/>
            </View>
        );
    }
}

const  styles=StyleSheet.create({
    HomeMain:{
        backgroundColor:'#f3f3f3',
    }
})

export default  RecScreen
