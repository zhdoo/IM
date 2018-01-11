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
            isClick:this.props.isClick,
        };
        console.log(this.props.address)
    }
    componentWillMount(){
    }
    _onPressButton(e){
        this.setState({
               isClick:true
           })
        Alert.alert(
            'Alert Title'
        )
    }
    _onPressItem(){
           this.props.onPressItem();
    }
    render() {
        let buttomImage;
        if(this.state.isClick){
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
                    onPress={this._onPressItem.bind(this)}
                    underlayColor="rgba(0,0,0,0)"
                >
                    <Image
                        source={{uri:this.props.picurl}}
                        style={styles.UserImage}
                    />
                </TouchableHighlight>
                <View style={styles.UserInfo}>
                    <View style={styles.UserTitle}>
                        <Text style={styles.UserName}>{this.props.name}</Text>
                        <Text style={styles.UserAddress}>{this.props.address}  {this.props.localtionnum}</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor="rgba(0,0,0,0)"
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
    UserTitle:{
        flexDirection:'column',
    },
    UserAddress:{
        fontSize:11,
        color:'#999',
        marginLeft:10,
    },
    UserName:{
        color:'#444',
        marginLeft:10,
        width:itemWidth-60
    },
    button:{
        width:30,
        height:30,
        margin:5
    }
});
