/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    Text,
    TouchableHighlight
} from 'react-native';

const { width } = Dimensions.get('window')
var details = [
    {id:1,title:'打招呼',icon:require('../images/data.png')},
    {id:2,title:'关注',icon:require('../images/data.png')},
    {id:3,title:'下一个',icon:require('../images/data.png')},
    {id:4,title:'送礼物',icon:require('../images/data.png')},
];

renderItem=(item,i)=>
    <TouchableHighlight key={i} onPress={()=>{console.log(10)}} style={{flex:1,margin:5}}>
        <View style={{flexDirection:'column',alignItems:"center",justifyContent: 'center'}}>
            <Image style={{width:20,height:20}}  source={item.icon}/><Text>{item.title}</Text>
        </View>
    </TouchableHighlight>
const FooterTab=()=>
    <View style={styles.bottomTab}>
        { details.map((item,i)=>renderItem(item,i))}
    </View>

const styles = StyleSheet.create({
    bottomTab:{
        width,
        height:50,
        flexDirection:'row',
    },
});

export default FooterTab;       