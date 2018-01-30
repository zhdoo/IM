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

import Toast, {DURATION} from 'react-native-easy-toast'
export default class ChengXin extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        title: '诚信认证',
        headerStyle:{
            backgroundColor:'#FF66CC',
        },
        headerTintColor:"#fff"

    })

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
                <View >
                    <TouchableHighlight
                        style={{padding: 10}}
                        onPress={()=>{
                            this.refs.toast.show('hello world!',DURATION.LENGTH_LONG);
                        }}>
                        <Text>Press me</Text>
                    </TouchableHighlight>

                    <Toast ref="toast"/>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    main:{
        width:width
    }
});
