import React, { Component } from 'react'

import ReactNative, {
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
import { GiftedChat } from 'react-native-gifted-chat'

export  default class Chats extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
        console.log(this.state.messages)
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}