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
    StatusBar,
    Alert,
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
            showUserInfo:false,
            userList:[],
            list:[
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg',top:itemHeight-350,left:itemWidth-80},
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/210.jpg',top:itemHeight-300,left:itemWidth-180},
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/211.jpg',top:itemHeight-350,left:itemWidth-280},
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/207.jpg',top:160,left:70},
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/212.jpg',top:itemHeight-250,left:itemWidth-220},
                {id:1,name:'打招呼',age:22,discription:'我是一个容易大叔大婶大所大所',picurl:'http://pic2.58.com/jiaoyou/yyw_img/201.jpg',top:160,left:140},
            ],
            bounceValue: new Animated.Value(1), //你可以改变这个值看
//看效果是什么
            rotateValue: new Animated.Value(0),//旋转角度的初始值
        };
    }

    componentDidMount() {
        this.startAnimation();
        this._setUserList()
    }
    _setUserList(){
        let i=0
        let addUserList=setInterval(() =>{
            let userList=this.state.userList

            userList.push(this.state.list[i])

            this.setState({
                userList:userList
            })
            i++;
            if(i>this.state.list.length-1){
                clearInterval(addUserList)
            }
        },1000)
    }
    userInfo(){
        return(
            <View style={styles.userInfoMain}>
                <View style={styles.userInfoCover}>
                </View>
                <View style={styles.userInfoContent}>
                <Image source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/213.jpg'}} style={styles.userInfoImage}/>
                    <View style={styles.userChooseLikeInfo}>
                        <Text>aaaaa</Text>
                        <View style={[styles.userChooseLikeInfoTag,{marginTop:5}]}>
                            <Text style={{padding:3,backgroundColor:'#d4237a',color:'#fff',fontSize:10,marginRight:5}}>25岁</Text>
                            <Text style={{padding:3,backgroundColor:'#1296db',color:'#fff',fontSize:10,marginRight:5}}>天蝎座</Text>

                        </View>
                        <Text style={{fontSize:12,color:"#777",marginTop:5}}>4km</Text>
                    </View>
                    <View style={styles.userChooseLike}>
                        <TouchableHighlight style={styles.userChooseLikeBtn} onPress={()=>{
                            this.setState({
                                showUserInfo:false
                            })
                        }}
                                            underlayColor='rgba(0,0,0,0)'>
                            <Image source={require('../images/dislike.png')} style={styles.userChooseLikeIcon}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.userChooseLikeBtn} onPress={()=>{
                            Alert.alert('打招呼成功')
                            this.setState({
                                showUserInfo:false
                            })
                        }}
                                            underlayColor='rgba(0,0,0,0)'>
                            <Image source={require('../images/like.png')} style={styles.userChooseLikeIcon}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>)
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
    _onPressBtn(i){
        let showOrHide=this.state.showUserInfo?false:true
        this.setState({
            showUserInfo:showOrHide
        })
    }
    render() {
        let userInfo = this.state.showUserInfo ?  this.userInfo() : null;    // 菜单
        return (
            <View style={styles.container}>
                {userInfo}
                <StatusBar
                    barStyle="light-content"
                />
                <TouchableHighlight onPress={()=>{
                    this.setState({
                        userList:[]
                    })
                    this._setUserList()
                }}  style={styles.refreshBtn}>
                    <Image source={require('../images/refresh.png')} style={{width:'100%',height:'100%'}}/>
                </TouchableHighlight>
                <Image source={require('../images/start.jpg')} style={{width:'100%',height:'100%'}}/>
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
    refreshBtn: {
        width:40,height:40,padding:5,borderRadius:20,backgroundColor:"#000",opacity:0.6,position:'absolute',top:30,right:20,zIndex:10000
    },
    userInfoCover:{
        width:itemHeight,
        height:itemHeight,
        position:'absolute',
        top:0,
        zIndex:100,
        backgroundColor:'#000',
        opacity:0.6
    },
    userInfoMain:{
        width:itemWidth,
        height:itemHeight,
        position:'absolute',
        top:0,
        zIndex:1000000,
    },
    userChooseLikeInfo:{
        backgroundColor:"#fff",
        padding:5
    },
    userChooseLikeInfoTag:{
        flexDirection:'row',
    },
    userInfoContent:{
        width:200,
        position:'absolute',
        left:(itemWidth-200)/2,
        top:(itemHeight-300)/2,
        zIndex:1000,
    },
    userInfoImage:{
        width:200,
        height:200
    },
    userChooseLike:{
        flexDirection:'row',
        width:200,
        height:50,
        backgroundColor:'#f3f3f3',
        alignItems:'center',


    },
    userChooseLikeBtn:{
        flex:1,
        // backgroundColor:'#FF0000',
        textAlign:'center'
    },
    userChooseLikeIcon:{
        width:40,height:40,
        marginLeft:30
    }
});
