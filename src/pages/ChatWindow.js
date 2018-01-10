/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';



export default class ChatWindow extends Component<{}> {

    state = {
        messages: [],
    };

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
                        avatar: 'http://pic2.58.com/jiaoyou/yyw_img/207.jpg',
                    },
                },
            ],
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }

}
