import React, {Component} from 'react';
import ReactNative, {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,



} from 'react-native';



import { GiftedChat } from 'react-native-gifted-chat'

export  default  class ChatWindow extends React.Component {
    state = {
        messages: [],
    }
    static navigationOptions = ({navigation}) => ({
        title: 'tt',
        headerStyle:{
            backgroundColor:'#FF66CC',
        },

        inputMenu:'default',
        headerTintColor:"#fff",
        showTool:false
    })

    componentWillMount() {
        this.setState({
            userId:1,
            typingText: null,
            msgText:'123',
            userInfo:{
                _id: 1,
                name: 'React Native',
                avatar: 'http://pic2.58.com/jiaoyou/yyw_img/211.jpg',
            },
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'http://pic2.58.com/jiaoyou/yyw_img/211.jpg',
                    },
                },
                {
                    _id: 2,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2  ,
                        name: 'React Native',
                        avatar: 'http://pic2.58.com/jiaoyou/yyw_img/211.jpg',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        let messagesList=this.state.messages

        let nowMsg= {
                _id: messagesList.length+1,
                text: this.state.msgText,
                createdAt: new Date(),
                user: this.state.userInfo
            }
            messagesList.push(nowMsg)
        this.setState({
            messages: GiftedChat.append(messagesList, messages),
        })
    }



    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                user={this.state.userInfo}
                renderInputToolbar={(messages)=>{
                    return(
                        <View style={styles.inputToolBar}>
                            <TouchableHighlight onPress={()=>{
                                let showOrHide=this.state.showTool?false:true
                                this.setState({
                                    showTool:showOrHide
                                })
                            }}><Image source={require('../images/help.png')} style={{width:40,height:40}}/></TouchableHighlight>
                            <TextInput
                                style={{height:20,flex:1,paddingLeft:5,height:35,fontSize:14,borderColor:'#000',borderWidth:1}}
                                returnKeyType='send'
                                multiline={true}
                                onChangeText={(msgText) => this.setState({msgText})}
                                value={this.state.msgText}
                                onKeyPress={(e)=>{

                                    if(e.nativeEvent.key=='Enter'){
                                        this.onSend(messages)
                                    }
                                }}
                            />
                            <TouchableHighlight onPress={()=>{
                                let showOrHide=this.state.showTool?false:true
                                this.setState({
                                    showTool:showOrHide
                                })
                            }}>
                                <Image source={require('../images/help.png')} style={{width:40,height:40}}/>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>{
                                let showOrHide=this.state.showTool?false:true
                                this.setState({
                                    showTool:showOrHide
                                })
                            }}>
                                <Image source={require('../images/help.png')} style={{width:40,height:40}}/>
                            </TouchableHighlight>
                        </View>
                    )
                }}

                renderChatFooter={()=>{
                    if(this.state.showTool){
                        return (<View style={styles.footerContainer}>
                            <Text style={styles.footerText}>
                                1
                            </Text>
                        </View>)
                    }
                    return null;
                }}
                showUserAvatar={true}
            />
        )
    }
}

const styles=StyleSheet.create({
    footerContainer: {
        width:'100%',
        height:60,
        backgroundColor:'#fff'
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
    inputToolBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
