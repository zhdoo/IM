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
    ScrollView,
    View,
    Image,
    TouchableHighlight, Dimensions

} from 'react-native';

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
export default class Msg extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        title: '私信',
        headerStyle:{
            backgroundColor:'#FF66CC',
        },
        headerTitleStyle:{
            color:'#fff'
        }

    })

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            msgLists: [
                {'name':'楠楠','picurl':'http://pic2.58.com/jiaoyou/yyw_img/207.jpg','isClick':false,'msgNums':10,'lastMsg':'你好啊帅哥！聊一下啊！','lastTime':'1-21'},
                {'name':'寸心','picurl':'http://pic2.58.com/jiaoyou/yyw_img/211.jpg','isClick':false,'msgNums':6,'lastMsg':'你好啊帅哥！聊一下啊！','lastTime':'11-12'},
                {'name':'时间煮雨','picurl':'http://pic2.58.com/jiaoyou/yyw_img/215.jpg','isClick':false,'msgNums':60,'lastMsg':'你好啊帅哥！聊一下啊！','lastTime':'13:12'},
                {'name':'秋天不回来','picurl':'http://pic2.58.com/jiaoyou/yyw_img/214.jpg','isClick':false,'msgNums':2,'lastMsg':'你好啊帅哥！聊一下啊！','lastTime':'6-10'},
                {'name':'冬天的雪','picurl':'http://pic2.58.com/jiaoyou/yyw_img/213.jpg','isClick':false,'msgNums':1,'lastMsg':'你好啊帅哥！聊一下啊！','lastTime':'12:00'},
            ]
        };
    }
    renderItem(item,i){
        return(
            <TouchableHighlight onPress={(e)=>{
                this.props.navigation.navigate('ChatWindow')
                // console.log(e.props.navigation.navigate('ChatWindow'))
                // navigation.navigate('ChatWindow')
            }} key={i} >


            <View style={styles.msgItem} >
                <View>
                <Image source={{uri:item.picurl}} style={styles.msgItemPic}/>
                    <View style={styles.msgNums}><Text style={styles.msgNumsText}>{item.msgNums}</Text></View>
                </View>
                <View style={styles.msgItemContent}>
                    <Text  style={styles.msgItemContentName}>{item.name}</Text>
                    <Text  style={styles.msgItemContentText}>{item.lastMsg}</Text>
                </View>
                <View style={styles.msgItemStatus}>
                    <Text style={styles.msgItemStatusTime}>{item.lastTime}</Text>
                    <Text style={styles.msgItemStatusLook}>立即查看</Text>
                </View>
            </View>
            </TouchableHighlight>)
    }
    render() {
        return (
            <ScrollView style={styles.msgList}>

                  {this.state.msgLists.map((item, i) =>this.renderItem(item, i))}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    msgList:{
        width:width,
        backgroundColor:'#fff'
    },
    msgNums:{
        width:16,
        height:16,
        backgroundColor:"#ff0000",
        borderRadius:8,
        position:"relative",
        top:-50,
        left:50
    },
    msgNumsText:{
        color:"#ffffff",
        fontSize:10,
        width:16,
        height:16,
        textAlign:'center',
        lineHeight:16
    },
    msgItem:{
        width:width,
        height:70,
        backgroundColor:'#fff',
        borderBottomColor:'#f3f3f3',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    msgItemPic:{
        width:50,
        height:50,
        marginLeft:10,
        borderRadius:25,
        marginTop:15
    },
    msgItemContent:{
        marginLeft:20,
        flex:1,
    },
    msgItemContentName:{
        fontSize:16,
        marginBottom:10,
    },
    msgItemContentText:{
        fontSize:12,
        color:"#777777"
    },
    msgItemStatus:{
        marginRight:10,
    },
    msgItemStatusTime:{
        fontSize:10,
        color:'#777',
        marginBottom:10
    },
    msgItemStatusLook:{
        fontSize:10,
        padding:5,
        color:'#ffffff',
        backgroundColor:'#FF66CC'
    }
});
