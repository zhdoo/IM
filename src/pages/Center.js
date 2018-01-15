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


const { width } = Dimensions.get('window')

export default class Center extends Component<{}> {
    static navigationOptions = {
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    };
    render() {
        return (
            <ScrollView style={styles.centerTop}>
                <Image source={require('../images/timg.jpeg')} style={{width,height:300}}/>
                <View style={styles.centerMyInfo}>
                    <Image source={require('../images/timg.jpeg')} style={styles.centerMyHeaderPic}/>
                    <Text>我很帅的</Text>
                    <Text>12321321</Text>
                    <View>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    centerTop:{
        width,
        height:300,
        backgroundColor:'#ddd'
    },
    centerMyInfo:{
        position:"absolute",
        top:30,
        width:"80%",
        marginLeft:'10%',
        height:250,
        flexDirection:'column',
        alignItems: 'center',
        // backgroundColor:"#000"
    },
    centerMyHeaderPic:{
        width:80,
        height:80,
        backgroundColor:'red',
        borderRadius:40,
    }
});
