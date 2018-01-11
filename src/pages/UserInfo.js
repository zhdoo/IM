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
    Image,
    Button,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class UserInfo extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        header:null,
    })
    render() {
        const renderPagination = (index, total, context) => {
            return (
                <View style={styles.paginationStyle}>
                    <Text style={{ color: 'grey' }}>
                        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
                    </Text>
                </View>
            )
        }
        return (
            <View style={{width:'100%',height:400}}>
                <Swiper
                    style={styles.wrapper}
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
                    paginationStyle={{
                        bottom: 100
                    }}
                    loop={true}
                >
                    <View style={styles.slide}>
                        <Image style={styles.image}
                            source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/207.jpg'}}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image}
                               source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/210.jpg'}}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image}
                               source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/212.jpg'}}
                        />
                    </View>
                </Swiper>
                <Text>123213</Text>
                <View style={styles.backButton}>
                    <TouchableHighlight
                        onPress={()=>{
                        this.props.navigation.goBack()
                        }}
                        underlayColor={'null'}
                    >
                        <Image
                            source={require('../images/back.png')}
                            style={styles.backButtonIcon}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.userInfoBase}>
                    <View>123123</View>
                    <View>123123</View>
                    <View>123123</View>
                </View>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    backButton:{
        position:'absolute',
        top:30,
        left:20,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.3
    },
    userInfoBase:{
        flexDirection:'row',
    },
    slide: {
       height:400,
        backgroundColor: 'red'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        height:400,
        width,
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    },
    backButtonIcon:{
        width:30,
        height:20,
    }
})