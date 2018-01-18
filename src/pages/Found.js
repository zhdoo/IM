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
    Animated,
    Easing,
    TouchableHighlight,
    Dimensions,
    StatusBar
} from 'react-native';

const itemWidth=Dimensions.get('window').width
const itemHeight=Dimensions.get('window').height
export default class Found extends Component<{}> {
    static navigationOptions = {
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    };
    constructor(props) {
        super(props);
        this.state = {
            userList:[],
            list:[
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg',top:itemHeight-350,left:itemWidth-80},
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/210.jpg',top:itemHeight-300,left:itemWidth-180},
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/211.jpg',top:itemHeight-350,left:itemWidth-280},
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/207.jpg',top:160,left:70},
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/212.jpg',top:itemHeight-250,left:itemWidth-220},
                {id:1,title:'打招呼',picurl:'http://pic2.58.com/jiaoyou/yyw_img/201.jpg',top:160,left:140},
            ],
            bounceValue: new Animated.Value(1), //你可以改变这个值看
//看效果是什么
            rotateValue: new Animated.Value(0),//旋转角度的初始值
        };
    }
    componentWillMount(){
        console.log(123)
    }
    componentDidMount() {
        this.startAnimation();
        var i=0
        var addUserList=setInterval(() =>{
            var userList=this.state.userList
            console.log(this.state.list[i])
            userList.push(this.state.list[i])
            console.log(userList)
            this.setState({
                userList:userList
            })
            i++;
            if(i>this.state.list.length-1){
                console.log('end')
                clearInterval(addUserList)
            }
        },1000)

    }
    startAnimation() {
        this.state.bounceValue.setValue(1);//和上面初始值一样，所以
//弹动没有变化
        this.state.rotateValue.setValue(0);
        Animated.parallel([
            //通过Animated.spring等函数设定动画参数
            //可选的基本动画类型: spring, decay, timing
            Animated.spring(this.state.bounceValue, {
                toValue: 1,      //变化目标值，也没有变化
                friction: 20,    //friction 摩擦系数，默认40
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 1,  //角度从0变1
                duration: 5000,  //从0到1的时间
                easing: Easing.out(Easing.linear),//线性变化，匀速旋转
            }),
            //调用start启动动画,start可以回调一个函数,从而实现动画循环
        ]).start(()=>this.startAnimation());
    }
    renderItem(item, i) {
        return <TouchableHighlight key={i} onPress={this._onPressBtn.bind(this,i)} style={{position:"absolute",top:item.top,left:item.left,zIndex:10000}}   underlayColor="rgba(0,0,0,0)">
                <Image style={{width: 50, height: 50,borderRadius:25,borderWidth:2,borderColor:'#fff'}} source={{uri:item.picurl}}/>
        </TouchableHighlight>
    }
    _onPressBtn(){

    }
    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Image source={require('../images/start.jpg')}/>
                {this.state.userList.map((item, i) =>this.renderItem(item, i))}
                <Animated.Image source={require('../images/leida.png')}
                                style={{
                                    position:'absolute',
                                    width:itemWidth,
                                    height:itemWidth,
                                    top:100,
                                    transform: [
                                        //将初始化值绑定到动画目标的style属性上
                                        {scale: this.state.bounceValue},
                                        //使用interpolate插值函数,实现了从数值单位的映
//射转换,上面角度从0到1，这里把它变成0-360的变化
                                        {rotateZ: this.state.rotateValue.interpolate({
                                            inputRange: [0,1],
                                            outputRange: ['0deg', '360deg'],
                                        })},
                                    ]}}>
                </Animated.Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    leidaImage: {

    }
});
