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
export default class FooterTab extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            userId: 5,
            details :[
                {id:1,title:'打招呼',icon:require('../images/data.png')},
                {id:2,title:'关注',icon:require('../images/data.png')},
                {id:3,title:'下一个',icon:require('../images/data.png')},
                {id:4,title:'送礼物',icon:require('../images/data.png')},
            ]
        };
    }
    _onPressBtn(e){
        this.props.resetUserid(1000)
        console.log(e)
    }
    renderItem(item, i) {
        return <TouchableHighlight key={i} onPress={this._onPressBtn.bind(this,i)} style={{flex: 1, margin: 5}}   underlayColor="rgba(0,0,0,0)">
                    <View style={{flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={item.icon}/><Text>{item.title}</Text></View>
                </TouchableHighlight>
    }
    render(){
        return (
            <View style={styles.bottomTab}>{this.state.details.map((item, i) =>this.renderItem(item, i))}</View>
        );
    }
}
const styles = StyleSheet.create({
    bottomTab:{
        width,
        height:50,
        flexDirection:'row',
    },
});
