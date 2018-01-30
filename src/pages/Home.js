
import React, { Component } from 'react';
import {
    Text,Image,StyleSheet,Platform,View
} from 'react-native';


import { TabNavigator } from "react-navigation";


import Rec from './Rec'
import Center from './Center'
import Found from './Found'
import Msg from './Msg'
var tabHeight=(Platform.OS=='ios')?50:60;
const Home = TabNavigator({
        Rec: {
            screen: Rec,
            navigationOptions:{
                tabBarLabel: '推荐',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/home.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
            },
        },
        Msg: {
            screen: Msg,
            navigationOptions:{
                tabBarLabel: '消息',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <View style={styles.msgNums}><Text style={styles.msgNumsText}>99</Text></View>
                    <Image
                        source={require('../images/msg.png')}
                        style={[styles.icon,{tintColor: tintColor,marginTop:-30}]}
                    />
                    </View>
                ),
            },
        },
        Found: {
            screen: Found,
            navigationOptions:{
                tabBarLabel: '发现',

                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/found.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
            },
        },
        Center: {
            screen: Center,
            navigationOptions:{
                tabBarLabel: '我',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/center.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />
                ),
            },
        },

    },
    {
        swipeEnabled:false,
        animationEnabled: false,
        tabBarPosition:'bottom',
        initialRouteName:'Msg',
        lazy:true,
        tabBarOptions:{
            activeTintColor: '#d4237a',
            inactiveTintColor:'#777',
            showIcon:true,
            labelStyle: {
                fontSize: 12,
                height:16
            },
            indicatorStyle:{
                backgroundColor:null
            },
            tabStyle:{

            },
            iconStyle:{
            },
            style: {
                height:tabHeight,
                backgroundColor: '#fff',
            },
        }
    }
);


const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    msgNums:{
        width:18,
        height:18,
        backgroundColor:"#ff0000",
        borderRadius:9,
        position:"relative",
        top:-16,
        zIndex:100,
        left:20
    },
    msgNumsText:{
        color:"#ffffff",
        fontSize:10,
        width:18,
        height:18,
        textAlign:'center',
        lineHeight:18
    },
});


export  default  Home;