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
    Button,
    LayoutAnimation
} from 'react-native';
import Toast from '../compoments/Toasts'
// LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

export default class Found extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            showToast:false
        };
    }
    componentDidMount() {

    }
    render() {
        let v = this.state.showToast ?   <Toast/> : null;    // 菜单
        return (

            <View>
                {v}
                <Button title="123" style={{position:'absolute',top:500}} onPress={()=>{
                    var showOrHide=this.state.showToast?false:true
                    this.setState({
                        showToast:showOrHide
                    })
                }}/>
            </View>
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
