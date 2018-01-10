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
    TouchableHighlight
} from 'react-native';
var itemWidth=(Dimensions.get('window').width-15)/2;

export default class RecItem extends Component<{}> {
    constructor(props) {
        super(props);  // 初始状态
        this.state = {
            dataSource :{
                name:this.props.name,
                picurl:this.props.picurl,
                isClick:this.props.isClick,
            }
        };
    }
    componentWillMount(){
    }
    _onPressButton(e){
        let dataSource=this.state.dataSource
        dataSource.isClick=true
        this.setState(
           {
               dataSourse:dataSource
           }
        )
        Alert.alert(
            'Alert Title'
        )
    }
    _onPressItem(){
           this.props.onPressItem();
    }
    render() {
        let buttomImage;
        if(this.state.dataSource.isClick){
            buttomImage=(
                <Image
                style={styles.button}
                source={require('../images/hied.png')}
                />
            );
        }else{
            buttomImage=( <Image
                style={styles.button}
                source={require('../images/hi.png')}
            />)
        }
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this._onPressItem.bind(this)} >
                    <Image
                        source={{uri:this.state.dataSource.picurl}}
                        style={styles.UserImage}
                    />
                </TouchableHighlight>
                <View style={styles.UserInfo}>
                    <Text style={styles.UserName}>{this.state.dataSource.name}</Text>
                    <TouchableHighlight
                        underlayColor="#fff"
                        onPress={this._onPressButton.bind(this)}>
                        { buttomImage }
                    </TouchableHighlight>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:itemWidth,
        height:itemWidth+40,
        marginLeft:5,
        marginTop:5,
        backgroundColor:'#fff',
    },
    UserImage:{
        width:itemWidth,
        height:itemWidth
    },
    UserInfo:{
        flexDirection:'row',
        // 一行显示不下,换一行
        alignItems:'center', // 必须设置,否则换行不起作用
    },
    UserName:{
        color:'#777',
        marginLeft:10,
        width:itemWidth-60
    },
    button:{
        width:30,
        height:30,
        margin:5
    }
});
