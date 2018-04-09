
import React, { Component } from 'react'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    NativeModules,
    requireNativeComponent,
    Alert,
    Dimensions,
    Button,
    DeviceEventEmitter,
    Platform,
    PixelRatio,
    PermissionsAndroid
} from 'react-native'


import RNFetchBlob from 'react-native-fetch-blob'


var ReactNative = require('react-native')
import IMUI from 'aurora-imui-react-native'
var InputView = IMUI.ChatInput
var MessageListView = IMUI.MessageList
const AuroraIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')
const getInputTextEvent = "getInputText"
const MessageListDidLoadEvent = "IMUIMessageListDidLoad"

var themsgid = 1
var photoPathArr = [];
var msgIdArr = [];

function constructNormalMessage() {

    var message = {}
    message.msgId = themsgid.toString()
    themsgid += 1
    message.status = "send_succeed"
    message.isOutgoing = false
    var date = new Date()
    message.timeString = date.getHours() + ":" + date.getMinutes()
    var user = {
        userId: "111",
        displayName: "笑年郎",
        avatarPath: "images"
    }

    message.fromUser = user
    return message
}

class CustomVew extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (<img src={`http://pic2.58.com/jiaoyou/yyw_img/207.jpg`}></img>)
    }
}

export default class ChatWindow extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '小姑娘',
        headerStyle:{
            backgroundColor:'#FF66CC',
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerBackTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'

    })

    constructor(props) {
        super(props);
        let initHeight;
        if (Platform.OS === "ios") {

            initHeight = 86
        } else {
            initHeight = 100
        }
        this.state = {
            inputLayoutHeight: initHeight,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { width: window.width, height: initHeight},
            isAllowPullToRefresh: true,
            navigationBar: {},
        }

        this.updateLayout = this.updateLayout.bind(this);
        this.onMsgClick = this.onMsgClick.bind(this);
    }

    componentDidMount() {
        /**
         * Android only
         * Must set menu height once, the height should be equals with the soft keyboard height so that the widget won't flash.
         * 在别的界面计算一次软键盘的高度，然后初始化一次菜单栏高度，如果用户唤起了软键盘，则之后会自动计算高度。
         */
        if (Platform.OS === "android") {
            this.refs["ChatInput"].setMenuContainerHeight(316)
        }
        this.resetMenu()
        AuroraIController.addMessageListDidLoadListener(() => {
            this.getHistoryMessage()
        });
    }

    getHistoryMessage() {
        var messages = []
        for (var i = 0; i < 10; i++) {

            if (Platform.OS === "ios") {
                RNFetchBlob
                    .config({
                        // add this option that makes response data to be stored as a file,
                        // this is much more performant.
                        fileCache : true,
                    })
                    .fetch('GET', 'http://pic2.58.com/jiaoyou/yyw_img/207.jpg', {
                        //some headers ..
                    })
                    .then((res) => {
                        var eventMessage = constructNormalMessage()
                        eventMessage.msgType = "text"
                        eventMessage.fromUser.avatarPath=res.path()
                        eventMessage.text = '11232132131321312321321'
                        AuroraIController.appendMessages([eventMessage])
                        AuroraIController.scrollToBottom(true)

                    })

            } else {
                var eventMessage = constructNormalMessage()
                eventMessage.msgType = "text"
                eventMessage.fromUser.avatarPath=res.path()
                eventMessage.text = '11232132131321312321321'
                AuroraIController.appendMessages([eventMessage])
                AuroraIController.scrollToBottom(true)
            }

        }
    }

    onInputViewSizeChange = (size) => {
        console.log("height: " + size.height + " width: " + size.width)
        if (this.state.inputLayoutHeight != size.height) {
            this.setState({
                inputLayoutHeight: size.height,
                inputViewLayout: { width: window.width, height: size.height },
                messageListLayout: { flex: 1, width: window.width, margin: 0 }
            })
        }
    }

    componentWillUnmount() {
        AuroraIController.removeMessageListDidLoadListener(MessageListDidLoadEvent)
    }

    resetMenu() {
        if (Platform.OS === "android") {
            this.refs["ChatInput"].showMenu(false)
            this.setState({
                messageListLayout: { flex: 1, width: window.width, margin: 0 },
                navigationBar: { height: 64, justifyContent: 'center' },
            })
            this.forceUpdate();
        } else {
            AuroraIController.hidenFeatureView(true)
        }
    }

    /**
     * Android need this event to invoke onSizeChanged
     */
    onTouchEditText = () => {
        this.refs["ChatInput"].showMenu(false)
    }

    onFullScreen = () => {
        console.log("on full screen")
        this.setState({
            messageListLayout: { flex: 0, width: 0, height: 0 },
            inputViewLayout: { flex: 1, width: window.width, height: window.height },
            navigationBar: { height: 0 }
        })
    }

    onRecoverScreen = () => {
        // this.setState({
        //   inputLayoutHeight: 100,
        //   messageListLayout: { flex: 1, width: window.width, margin: 0 },
        //   inputViewLayout: { flex: 0, width: window.width, height: 100 },
        //   navigationBar: { height: 64, justifyContent: 'center' }
        // })
    }

    onAvatarClick = (message) => {
        // Alert.alert()
        // AuroraIController.removeMessage(message.msgId)
    }

    onMsgClick(message) {
        console.log(message)
        Alert.alert("message", JSON.stringify(message))
    }

    onMsgLongClick = (message) => {
        Alert.alert('message bubble on long press', 'message bubble on long press')
    }

    onStatusViewClick = (message) => {
        message.status = 'send_succeed'
        AuroraIController.updateMessage(message)
    }

    onBeginDragMessageList = () => {
        this.resetMenu()
        AuroraIController.hidenFeatureView(true)
    }

    onTouchMsgList = () => {
        AuroraIController.hidenFeatureView(true)
    }

    onPullToRefresh = () => {
        console.log("on pull to refresh")
        var messages = []
        for (var i = 0; i < 14; i++) {
            var message = constructNormalMessage()
            // if (index%2 == 0) {
            message.msgType = "text"
            message.text = "" + i
            // }

            if (i % 3 == 0) {
                message.msgType = "video"
                message.text = "" + i
                message.mediaPath = "1"
                message.duration = 12
            }

            AuroraIController.insertMessagesToTop([message])
        }
        AuroraIController.insertMessagesToTop(messages)
        if (Platform.OS === 'android') {
            this.refs["MessageList"].refreshComplete()
        }

    }

    onSendText = (text) => {

        if (Platform.OS === "ios") {
            RNFetchBlob
                .config({
                    // add this option that makes response data to be stored as a file,
                    // this is much more performant.
                    fileCache : true,
                })
                .fetch('GET', 'http://pic2.58.com/jiaoyou/yyw_img/207.jpg', {
                    //some headers ..
                })
                .then((res) => {
                    var message = constructNormalMessage()
                    message.fromUser.avatarPath=res.path()
                    console.log(this.state)
                    message.isOutgoing = true
                    var evenmessage = constructNormalMessage()
                    message.msgType = 'text'
                    message.text = text
                    AuroraIController.appendMessages([message])

                })

        } else {
            var message = constructNormalMessage()
            message.fromUser.avatarPath=this.state.avatarPath
            console.log(this.state)
            message.isOutgoing = true
            var evenmessage = constructNormalMessage()
            message.msgType = 'text'
            message.text = text
            AuroraIController.appendMessages([message])
        }


    }

    onTakePicture = (media) => {
        console.log("media " + JSON.stringify(media))
        var message = constructNormalMessage()
        message.msgType = 'image'
        message.mediaPath = media.mediaPath
        message.isOutgoing = true
        AuroraIController.appendMessages([message])
        this.resetMenu()
        AuroraIController.scrollToBottom(true)
        // photoPathArr.push(message.mediaPath)
        // msgIdArr.push(message.msgId)
    }

    onStartRecordVoice = (e) => {
        console.log("on start record voice")
    }

    onFinishRecordVoice = (mediaPath, duration) => {
        var message = constructNormalMessage()
        message.msgType = "voice"
        message.mediaPath = mediaPath
        message.timeString = "1111"
        message.isOutgoing = true
        message.duration = duration
        AuroraIController.appendMessages([message])
        console.log("on finish record voice")
    }

    onCancelRecordVoice = () => {
        console.log("on cancel record voice")
    }

    onStartRecordVideo = () => {
        console.log("on start record video")
    }

    onFinishRecordVideo = (video) => {
        var message = constructNormalMessage()

        message.msgType = "video"
         message.mediaPath = video.mediaPath
        message.isOutgoing = true
        message.duration = video.duration
        AuroraIController.appendMessages([message])
    }

    onSendGalleryFiles = (mediaFiles) => {
        /**
         * WARN: This callback will return original image,
         * if insert it directly will high memory usage and blocking UI。
         * You should crop the picture before insert to messageList。
         *
         * WARN: 这里返回的是原图，直接插入大会话列表会很大且耗内存.
         * 应该做裁剪操作后再插入到 messageListView 中，
         * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
         *
         * 代码用例不做裁剪操作。
         */
        for (index in mediaFiles) {
            var message = constructNormalMessage()
            if (mediaFiles[index].mediaType == "image") {
                message.msgType = "image"
                photoPathArr.push(mediaFiles[index].mediaPath)
                msgIdArr.push(message.msgId)
            } else {
                message.msgType = "video"
                message.duration = mediaFiles[index].duration
            }

            message.mediaPath = mediaFiles[index].mediaPath
            message.timeString = "8:00"
            message.status = "send_going"
            AuroraIController.appendMessages([message])
            AuroraIController.scrollToBottom(true)
        }

        this.resetMenu()
    }

    onSwitchToMicrophoneMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToEmojiMode = () => {
        AuroraIController.scrollToBottom(true)
    }
    onSwitchToGalleryMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToCameraMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onShowKeyboard = (keyboard_height) => {
    }

    updateLayout(layout) {
        this.setState({ inputViewLayout: layout })
    }

    onInitPress() {
        console.log('on click init push ');
        this.updateAction();
    }

    onClickSelectAlbum = () => {
        console.log("on click select album")
    }

    onCloseCamera = () => {
        console.log("On close camera event")
        this.setState({
            inputLayoutHeight: 100,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { flex: 0, width: window.width, height: 100 },
            navigationBar: { height: 64, justifyContent: 'center' }
        })
    }

    /**
     * Switch to record video mode or not
     */
    switchCameraMode = (isRecordVideoMode) => {
        console.log("Switching camera mode: isRecordVideoMode: " + isRecordVideoMode)
        // If record video mode, then set to full screen.
        if (isRecordVideoMode) {
            this.setState({
                messageListLayout: { flex: 0, width: 0, height: 0 },
                inputViewLayout: { flex: 1, width: window.width, height: window.height },
                navigationBar: { height: 0 }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <MessageListView style={this.state.messageListLayout}
                                 ref="MessageList"
                                 isAllowPullToRefresh={true}
                                 onAvatarClick={this.onAvatarClick}
                                 onMsgClick={this.onMsgClick}
                                 onStatusViewClick={this.onStatusViewClick}
                                 onTouchMsgList={this.onTouchMsgList}
                                 onTapMessageCell={this.onTapMessageCell}
                                 onBeginDragMessageList={this.onBeginDragMessageList}
                                 onPullToRefresh={this.onPullToRefresh}
                                 avatarSize={{ width: 40, height: 40 }}
                                 avatarCornerRadius={20}
                                 isShowOutgoingDisplayName={true}
                                 isShowIncomingDisplayName={true}
                                 maxBubbleWidth={0.7}
                                 messageListBackgroundColor={"#f3f3f3"}
                                 sendBubbleTextSize={14}
                                 receiveBubbleTextSize={14}
                                 sendBubbleTextColor={"#000000"}
                                 sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}
                                 datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}
                                 dateBackgroundColor={"#dddddd"}
                                 photoMessageRadius={5}
                                 videoDurationTextColor={"#ffffff"}
                />
                <InputView style={[this.state.inputViewLayout]}
                           ref="ChatInput"
                           onSendText={this.onSendText}
                           onTakePicture={this.onTakePicture}
                           onStartRecordVoice={this.onStartRecordVoice}
                           onFinishRecordVoice={this.onFinishRecordVoice}
                           onCancelRecordVoice={this.onCancelRecordVoice}
                           onStartRecordVideo={this.onStartRecordVideo}
                           onFinishRecordVideo={this.onFinishRecordVideo}
                           onSendGalleryFiles={this.onSendGalleryFiles}
                           onSwitchToEmojiMode={this.onSwitchToEmojiMode}
                           onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
                           onSwitchToGalleryMode={this.onSwitchToGalleryMode}
                           onSwitchToCameraMode={this.onSwitchToCameraMode}
                           onShowKeyboard={this.onShowKeyboard}
                           onTouchEditText={this.onTouchEditText}
                           onFullScreen={this.onFullScreen}
                           onRecoverScreen={this.onRecoverScreen}
                           onSizeChange={this.onInputViewSizeChange}
                           closeCamera={this.onCloseCamera}
                           switchCameraMode={this.switchCameraMode}
                           showSelectAlbumBtn={true}
                           onClickSelectAlbum={this.onClickSelectAlbum}
                           inputPadding={{ left: 30, top: 10, right: 10, bottom: 10 }}
                           galleryScale={0.6}//default = 0.5
                           compressionQuality={0.6}
                           hideCameraButton={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sendCustomBtn: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputView: {
        backgroundColor: 'green',
        width: window.width,
        height: 100,
    },
    btnStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#3e83d7',
        borderRadius: 8,
        backgroundColor: '#3e83d7'
    }
});