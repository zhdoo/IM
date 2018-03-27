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
    FlatList,
} from 'react-native';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import Toast, {DURATION} from 'react-native-easy-toast'
export default class ChatBody extends Component<{}> {
    state = {
        height:200
    }
    constructor(props) {
        super(props);  // 初始状态
        console.log(this.props)
    }
    componentWillMount(){
    }
    render() {
        return (
            <View style={this.props.style}>

            </View>
        );
    }
}

const styles = StyleSheet.create({

});
