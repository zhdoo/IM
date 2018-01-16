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
    Animated,
    Easing,
    LayoutAnimation
} from 'react-native';
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

export default class Found extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
            Animated.timing(                            // 随时间变化而执行的动画类型
                this.state.fadeAnim,                      // 动画中的变量值
                {
                    toValue: 1, // 目标值
                    duration: 2500, // 动画时间
                    easing: Easing.linear // 缓动函数
                }
            ).start();                                  // 开始执行动画

    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
                    width: 250, height: 50, backgroundColor: 'powderblue',
                    opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                }}
            >
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
