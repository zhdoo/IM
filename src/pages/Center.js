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
const itemWidth=Dimensions.get('window')/3-2
export default class Center extends Component<{}> {
    static navigationOptions = {
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    };
    render() {
        return (
            <ScrollView style={styles.centerTop}>
                <Image source={require('../images/timg.jpeg')} style={{width,height:300,opacity:0.2,backgroundColor:'#fff'}}/>
                <View style={styles.centerMyInfo}>
                    <Image source={require('../images/timg.jpeg')} style={styles.centerMyHeaderPic}/>
                    <Text style={styles.centerMyNickname}>我很帅的</Text>
                    <Text style={styles.centerMyId}>12321321</Text>
                    <View  style={styles.centerTopBtn} >
                        <View style={styles.centerTopBtnItem}><Text>1</Text></View>
                        <View style={styles.centerTopBtnItem,{backgroundColor:'#000'}}><Text>2</Text></View>
                        <View style={styles.centerTopBtnItem}><Text>3</Text></View>
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
        borderRadius:40,
        marginBottom:30,
        borderWidth:2,
        borderColor:'#fff'
    },
    centerMyNickname:{
        width,
        height:30,
        lineHeight:30,
        textAlign:'center',
    },
    centerTopBtn:{
         flexDirection:'row',
    },
    centerTopBtnItem:{
        width:itemWidth,
        alignItems:'center',    
    }
});
