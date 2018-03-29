import React, {Component} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text, Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    TouchableHighlight,
    Keyboard
} from 'react-native';

import  ChatBody from '../compoments/ChatBody'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
export  default  class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemHeight:height,
            scrollAnim: new Animated.Value(0),
            showButtons:false,
        };
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

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        if(this.state.showButtons){
            Animated.timing(
                this.state.scrollAnim,
                {
                    toValue: 0,
                    duration: 1,
                }
            ).start();
            this.setState({
                showButtons:false,
            })
        }
        console.log(this.state.showButtons);
    }

    _keyboardDidHide () {
        console.log(this.state.showButtons);
    }
    _onPressBtn(){
        if(this.state.showButtons){
            Animated.timing(
                this.state.scrollAnim,
                {
                    toValue: 0,
                    duration: 250,
                }
            ).start();
            this.setState({
                showButtons:false,
            })
        }else{
            Keyboard.dismiss();
            Animated.timing(
                this.state.scrollAnim,
                {
                    toValue: -200,
                    duration: 250,
                }
            ).start();
            this.setState({
                showButtons:true,
            })

        }

    }
    _onPressHideBottom(){
        if(this.state.showButtons){
            Animated.timing(
                this.state.scrollAnim,
                {
                    toValue: 0,
                    duration: 250,
                }
            ).start();
            this.setState({
                showButtons:false,
            })
        }
    }

    render() {
        return (

            <Animated.View style={{top:this.state.scrollAnim, position:'absolute', height:height-60,
                alignItems: 'center',}}>
                <KeyboardAvoidingView behavior='position'  keyboardVerticalOffset={60}>
                    <ScrollView keyboardDismissMode={'on-drag'}  onTouchStart={this._onPressHideBottom.bind(this)}  keyboardShouldPersistTaps={'never'}  style={{width:width}} >
                        <View style={styles.msgMain}>
                            <View style={styles.msgTimeLine}>
                                <Text style={styles.timeStyle}>03-18 15:23</Text>
                            </View>
                            <View style={styles.msgLeftItem}>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                                <View style={styles.triangleLeft}></View>
                                <View style={styles.msgLeftBox}><Text style={{padding:5}}>12321321321</Text></View>
                            </View>
                            <View style={styles.msgRightItem}>
                                <View style={styles.msgRightBox}><Text style={{padding:5}}>12321321321</Text></View>
                                <View style={styles.triangleRight}></View>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                            </View>
                            <View style={styles.msgLeftItem}>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                                <View style={styles.triangleLeft}></View>
                                <View style={styles.msgLeftBox}><Text style={{padding:5}}>12321321321</Text></View>
                            </View>
                            <View style={styles.msgTimeLine}>
                                <Text style={styles.timeStyle}>03-18 15:23</Text>
                            </View>
                            <View style={styles.msgRightItem}>
                                <View style={styles.msgRightBox}><Text style={{padding:5}}>12321321321</Text></View>
                                <View style={styles.triangleRight}></View>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                            </View>
                            <View style={styles.msgLeftItem}>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                                <View style={styles.triangleLeft}></View>
                                <View style={styles.msgLeftBox}><Text style={{padding:5}}>12321321321</Text></View>
                            </View>
                            <View style={styles.msgRightItem}>
                                <View style={styles.msgRightBox}><Text style={{padding:5}}>123213112sadads111fdsafdsfdsnihaoasdjhsaikhdjakdsfhsej1321dsfdsafdsfdsnihaoasdjhsaikhdjakdsfhsej1321dsfdsafdsfdsnihaoasdjhsaikhdjakdsfhsej1321</Text></View>
                                <View style={styles.triangleRight}></View>
                                <Image style={styles.avatarImg} source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} />
                            </View>
                        </View>

                    </ScrollView>

                    <View  style={styles.tabInputView}>
                        <TouchableHighlight onPress={this._onPressBtn.bind(this)}>
                            <Image
                                source={require('../images/voice.png')}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                        <TextInput
                            style={styles.tabInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            returnKeyType={'send'}
                        />
                        <TouchableHighlight onPress={this._onPressBtn.bind(this)}>
                            <Image
                                source={require('../images/emoji.png')}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressBtn.bind(this)}>
                        <Image
                            source={require('../images/inputmore.png')}
                            style={styles.icon}
                        />
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
                <View   style={styles.buttonBtn}>
                    <Text>待显示的内容</Text>
                </View>
            </Animated.View>


        )
    }
}

const styles=StyleSheet.create({
    msgMain:{
        width:'100%',
    },
    tabInput:{
        height: 40, borderColor: '#cecece', borderWidth: 1,
        borderRadius:3,
        marginRight:5,
        marginLeft:5,
        flex:1,
        paddingLeft:5,
        backgroundColor:'#ffffff'
    },
    buttonBtn:{
        width:'100%',
        height:200,
        borderWidth:1,
    },
    tabInputView:{
        height:60,
        width:width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#f9f9f9',
        paddingLeft:5,
        paddingRight:5,
        borderTopWidth:1,
        borderColor:"#afafaf"
    },
    icon:{
        width:30,height:30,margin:5
    },
    msgLeftItem:{
        flexDirection:"row",
        marginLeft:10,
        marginTop:5,
        marginBottom:5,
    },
    msgRightItem:{
        flexDirection:"row",
        marginRight:10,
        alignSelf: 'flex-end',
        marginTop:5,
        marginBottom:5,
    },
    avatarImg:{
        width:40,
        height:40,
    },
    triangleLeft: {
        width: 0,
        height: 0,
        marginTop:10,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth:8,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: '#fff',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    triangleRight: {
        width: 0,
        height: 0,
        marginTop:10,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth:8,
        borderTopWidth: 8,
        borderLeftColor: '#2ccf09',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    msgLeftBox:{
        backgroundColor:'#fff',
        padding:5,
        borderRadius:3,
        maxWidth:width-80,

    },
    msgRightBox:{
        backgroundColor:'#2ccf09',
        padding:5,
        borderRadius:3,
        maxWidth:width-80,
    },
    msgTimeLine:{
        width:width,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:5
    },
    timeStyle:{
        fontSize:12,color:'#999'
    }
})
