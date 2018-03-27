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
                    <ScrollView keyboardDismissMode={'on-drag'}  onTouchStart={this._onPressHideBottom.bind(this)}  keyboardShouldPersistTaps={'never'}  style={{borderWidth:1,width:width}} >

                        <View style={styles.msgMain}>
                            <TouchableHighlight onPress={()=>{
                                alert(0)
                            }}    underlayColor='rgba(0,0,0,0)'><Text>1111</Text></TouchableHighlight>
                        </View>

                    </ScrollView>

                    <View  style={{height:60,borderWidth:1,width:width,flexDirection:'row'}}>
                        <TextInput
                            style={styles.tabInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            returnKeyType={'send'}
                        />
                        <TouchableHighlight onPress={this._onPressBtn.bind(this)}>
                        <Image
                            source={require('../images/search.png')}
                            style={{width:24,height:24,marginRight:3,marginTop:3}}
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
        backgroundColor:'red'
    },
    tabInput:{
        height: 40, borderColor: 'gray', borderWidth: 1,
        flex:1
    },
    buttonBtn:{
        width:'100%',
        height:200,
        borderWidth:1,
    }
})
