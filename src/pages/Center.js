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
    Image,
    View,
    Dimensions,
    ScrollView
} from 'react-native';


const { width} = Dimensions.get('window')
const itemWidth=Dimensions.get('window').width/3
export default class Center extends Component<{}> {
    static navigationOptions = {
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    };
    render() {
        return (
            <ScrollView style={{backgroundColor:'#f3f3f3'}}>
                <View  style={styles.centerTop}>
                    <Image source={require('../images/timg.jpeg')} style={{width,height:300,opacity:0.4,backgroundColor:'#fff'}}/>
                    <View style={styles.centerMyInfo}>
                        <Image source={require('../images/timg.jpeg')} style={styles.centerMyHeaderPic}/>
                        <Text style={styles.centerMyNickname}>我很帅的</Text>
                        <Text style={{color:'#fff'}}>12321321</Text>
                        <View  style={styles.centerTopBtn} >
                            <View style={styles.centerTopBtnItem}><Text style={{color:'#fff'}}>0</Text><Text style={{color:'#fff'}}>动态</Text></View>
                            <View style={styles.centerTopBtnItem1}><Text style={{color:'#fff'}}>2</Text><Text style={{color:'#fff'}}>关注</Text></View>
                            <View style={styles.centerTopBtnItem}><Text style={{color:'#fff'}}>3</Text><Text style={{color:'#fff'}}>谁看过我</Text></View>
                        </View>
                    </View>
                </View>
                <View style={styles.centerImageList}>
                    <View style={styles.centerImageUpload}>
                        <Text style={{fontSize:30}}>+</Text>
                        <Text style={{fontSize:12}}>上传图片</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    centerImageList:{
        flexDirection:'row',
        backgroundColor:"#fff",
        marginTop:5
    }
    ,
    centerImageUpload:{
        width:70,
        margin:5,
        height:70,
        marginLeft:10,
        borderWidth:1,
        borderColor:"#ddd",
        alignItems: 'center',
        justifyContent:'center',

    },
    centerTop:{
        width,
        height:250,
        backgroundColor:'#000'
    },
    centerMyInfo:{
        position:"absolute",
        top:30,
        width:"80%",
        marginLeft:'10%',
        height:200,
        flexDirection:'column',
        alignItems: 'center',
        // backgroundColor:"#000"
    },
    centerMyHeaderPic:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20,
        borderWidth:2,
        borderColor:'#fff'
    },
    centerMyNickname:{
        width,
        height:30,
        lineHeight:30,
        textAlign:'center',
        color:'#fff'
    },

    centerTopBtn:{
         flexDirection:'row',
        position:"absolute",
        top:170,
        height:40
    },
    centerTopBtnItem:{
        width:itemWidth,
        alignItems:'center',
        height:40,
        justifyContent:'center',
    },
    centerTopBtnItem1:{
        width:itemWidth-2,
        alignItems:'center',
        height:40,
        borderLeftWidth:1,
        borderLeftColor:"#fff",
        borderRightWidth:1,
        borderRightColor:"#fff",
        justifyContent:'center',
    },
    centerImages:{
        width,
        height:80,
        backgroundColor:'#fff',
        marginTop:5
    }
});
