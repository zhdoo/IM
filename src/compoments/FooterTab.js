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
                {id:1,title:'打招呼',icon:require('../images/chat.png')},
                {id:2,title:'关注',icon:require('../images/follow.png')},
                {id:3,title:'下一个',icon:require('../images/next.png')},
                {id:4,title:'送礼物',icon:require('../images/gift.png')},
            ]
        };
    }
    _onPressBtn(e){
        this.props.resetUserid(1000)
        let details=this.state.details
        let req;
        if(e==0){
            req=require('../images/chated.png')
        }else if(e==1){
            req=require('../images/followed.png')
        }else if(e==2){
            req=require('../images/nexted.png')
        }else if(e==3){
            req=require('../images/gifted.png')
        }
        details[e].icon=req
        this.setState({
            details :details
        })
    }
    renderItem(item, i) {
        return <TouchableHighlight key={i} onPress={this._onPressBtn.bind(this,i)} style={{flex: 1, margin: 10}}   underlayColor="rgba(0,0,0,0)">
                    <View style={{flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={item.icon}/><Text style={styles.itemText}>{item.title}</Text></View>
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
        flexDirection:'row',
        backgroundColor:'#fff',
        borderTopColor:'#f0f0f0',
        borderTopWidth:1,

    },
    itemText:{
        fontSize:12,
        marginTop:5 
    }
});
