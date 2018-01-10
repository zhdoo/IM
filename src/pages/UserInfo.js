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
    Dimensions
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
            <View style={{width:'100%',height:300}}>
                <Swiper style={styles.wrapper}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
                        activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5, marginLeft: 7, marginRight: 5}} />}
                        paginationStyle={{
                            bottom: 40
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
                <Button title="back" onPress={()=>{
                    this.props.navigation.goBack()
                }}/>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    wrapper: {
        height:300,
    },
    slide: {
       height:300,
        backgroundColor: 'red'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        height:300,
        width,
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
})