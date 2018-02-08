import React, {Component} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView

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
        text:'请输入点什么吧',
        inputMenu:'default',
        headerTintColor:"#fff",
        showTool:false,
        toolBarHeight:50
    })

    componentWillMount() {
        this.setState({
            userId:1,
            typingText: null,
            msgText:'',
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
        if(this.state.text!=''){
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, messages),
            }))
        }

        this.setState({
            text:''
        })
    }


    changeContent = (event)=> {

        this.setState({
            text: event.nativeEvent.text,
        });
    }
    renderToolBar(){
        if(this.state.showTool){
            return (<View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    1
                </Text>
            </View>)
        }
        return null;
    }

    setRightMenu(){
        this.refs.TextInput.blur();
        let showOrHide=this.state.showTool?false:true
        this.setState({
            toolBarHeight:200,
            showTool:showOrHide
        })
    }

    render() {
        return (

            <GiftedChat
                        messages={this.state.messages}
                        user={this.state.userInfo}
                        onSend={messages => this.onSend(messages)}
                        renderInputToolbar={e=>{
                            return(
                                <View >
                                    <View style={styles.inputViewStyle} ref='inputTool'>
                                        <TouchableHighlight onPress={()=>this.setRightMenu()}  >
                                            <Image source={require('../images/schat.png')} style={{width:30,height:30}}/>
                                        </TouchableHighlight>
                                        <TextInput
                                            ref={(e)=>console.log(e)}
                                            onChange={this.changeContent}
                                            multiline={true}
                                            value={this.state.text}
                                            style={styles.inputStyle}
                                        ></TextInput>
                                        <TouchableHighlight onPress={()=>{
                                            e.onSend({ text: this.state.text.trim() }, true);
                                        }}>
                                            <Image source={require('../images/schat.png')} style={{width:30,height:30}}/>
                                        </TouchableHighlight>
                                    </View>
                                    {this.renderToolBar()}
                                </View>
                            )
                        }}

                        minInputToolbarHeight={this.state.ToolBarHeight}
                        showUserAvatar={true}
                        renderChatFooter={()=>{
                            return (<View style={styles.footerContainer}>
                                <Text style={styles.footerText}>
                                    1
                                </Text>
                            </View>)
                        }}
                        keyboardShouldPersistTaps={'handled'}
                    />



        )
    }
}

const styles=StyleSheet.create({
    inputViewStyle:{
        flexDirection:'row',
        alignItems:"flex-end",
        padding:10,
        height:50,
    },
    inputStyle:{
        width:200,
        paddingLeft:5,
        minHeight:30,
        maxHeight:100,
        marginLeft:10,
        backgroundColor:'#ff0000',
    },
    container:{
        width:'100%',
        height:'100%'
    }
})
