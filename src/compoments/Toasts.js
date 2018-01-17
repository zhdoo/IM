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
    Alert,
    Animated,
    TouchableHighlight
} from 'react-native';
var width =Dimensions.get('window').width;
var height=Dimensions.get('window').height;

import * as Animatable from 'react-native-animatable';
export default class Toast extends Component<{}> {
    constructor(props) {
        super(props);  // 初始状态
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };

    }
    componentWillMount(){
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1, // 目标值

            }
        ).start();
    }

    render() {

        return (
            <View style={styles.toastMain}>
                <Animatable.View animation="slideInDown"  duration={200} onAnimationEnd={()=>{
                    console.log()
                }} style={styles.toastMsg}><Text style={{ color:'#fff'}}>Zoom me up, Scotty</Text></Animatable.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toastMain:{
        width:width,
        position:"absolute",
        top:height/3,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toastMsg:{

        backgroundColor:"#000",
        opacity:0.6,
        padding:5,
        borderRadius:5
    }
});
