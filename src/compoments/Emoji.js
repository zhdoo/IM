/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight, Dimensions
} from 'react-native';
const itemWidth=Dimensions.get('window').width
import Swiper from 'react-native-swiper'

export default class Emoji extends Component<{}> {
    state = {
        emojilist1:['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','☺','🙂','🤗','🤔','😐',
                    '😑','😶','🙄','😏','😣','😥','😮','🤐','😯'],
        emojilist2:['😪','😫','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😔','😕','🙃','🤑','😲','🙁','😖','😞','😟','😤',
                    '😢','😭','😦','😨','😩','😬','😰','😱','😳','😵'],
        emojilist3:['😡','😠','😷','🤒','🤕','🤢','🤧','😇','🤠','🤡','🤥','🤓',],
    }
    constructor(props) {
        super(props);  // 初始状态
        console.log(this.props)
    }
    componentWillMount(){
    }
    _renderEmojiItem(item,key){
        var that=this;
        return(
            <TouchableHighlight  key={key}  style={styles.touchDelBtn}  onPress={(e)=>{
                that.props.pressEmoji(item)
            }}><Text style={styles.emojiItem}>{item}</Text></TouchableHighlight>
        )
    }
    _renderDelEmoji(){
        return(
            <TouchableHighlight style={styles.touchDelBtn} onPress={(item)=>{
                console.log(item)
            }}>
                <Image source={require('../images/delete.png')} style={styles.delBtnIcon}/>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View>
            <View style={{padding:10,width:'100%',height:200}}>
                <Swiper
                    style={styles.wrapper}
                    showsPagination={false}
                    loop={false}
                >
                    <View style={styles.slide}>
                        {this.state.emojilist1.map((item,key)=> this._renderEmojiItem(item,key))}
                        {this._renderDelEmoji()}
                    </View>
                    <View style={styles.slide}>
                        {this.state.emojilist2.map((item,key)=> this._renderEmojiItem(item,key))}
                        {this._renderDelEmoji()}
                    </View>
                    <View style={styles.slide}>
                        {this.state.emojilist3.map((item,key)=> this._renderEmojiItem(item,key))}
                        {this._renderDelEmoji()}
                    </View>
                </Swiper>

            </View>
            <View style={styles.sendBox}>
                <TouchableHighlight style={styles.touchDelBtn}  style={styles.sendBtn} onPress={(item)=>{
                    this.props.sendMsg(item)
                }}>
                <Text style={styles.sendText}>发送</Text>
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchDelBtn:{
        width:(itemWidth-20)/8},
    delBtnIcon:{
        width:30,
        height:20,
        marginLeft:(((itemWidth-20)/8)-30)/2,marginTop:(((itemWidth-20)/8)-10)/2},
    slide:{
        width:"100%",
        flexWrap:"wrap",
        flexDirection:'row'
    },
    emojiItem:{
        width:'100%',
        fontSize:30,
        textAlign:"center",
        marginTop:7,
    },
    wrapper:{
        marginBottom:20
    },
    sendBox:{
        width:"100%",
        height:45,
        backgroundColor:"#fff"
    },
    sendBtn:{
        alignSelf: 'flex-end',
        height:45,
        width:70,
        backgroundColor:"#FF66CC",
    }
    ,sendText:{

        textAlign:'center',
        lineHeight:45,
        fontSize:16,
        color:'#fff'
    }
});
