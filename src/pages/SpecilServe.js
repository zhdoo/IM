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
    ScrollView,
    View,
    Image,
    TouchableHighlight, Dimensions

} from 'react-native';

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
export default class SpecilServe extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        title: '特权服务',
        headerStyle:{
            backgroundColor:'#FF66CC',
        },
        headerTintColor:"#fff"

    })

    constructor(props) {
        super(props);
        this.state = {
            currentIndex:1,
            memberPriceList:[
                {title:'6个月',icon:require('../images/member1.png'),discription:'180天VIP会员特权，仅1.0元／天',price:'188',tag:'多送一个月'},
                {title:'3个月',icon:require('../images/member2.png'),discription:'90天VIP会员特权，仅1.4元／天',price:'128',tag:'多送一个月'},
                {title:'1个月',icon:require('../images/member3.png'),discription:'30天VIP会员特权，仅2.6元／天',price:'68',tag:'多送一个月'},
            ],
            goldList:[
                {title:'10000金币',icon:require('../images/gold.png'),discription:'123123',price:'123'},
                {title:'20000金币',icon:require('../images/gold.png'),discription:'123123',price:'123'},
                {title:'30000金币',icon:require('../images/gold.png'),discription:'123123',price:'123'},
                {title:'40000金币',icon:require('../images/gold.png'),discription:'123123',price:'123'},
            ],
            vipServerList:[
                {title:'无限畅聊',icon:require('../images/schat.png')},
                {title:'身份标识',icon:require('../images/svip.png')},
                {title:'更多展示',icon:require('../images/sshow.png')},
                {title:'优质推荐',icon:require('../images/stuijian.png')},
                {title:'查看联系信息',icon:require('../images/sinfo.png')},
                {title:'查看私密照片',icon:require('../images/sphoto.png')},
            ]
        };
    }

    renderTabContent(e){
        let con;
        if(e==1){
            con=(
                <View style={styles.tabContent}>
                    {this.state.memberPriceList.map((item,i)=>{
                        return(
                            <View key={i} style={styles.tabContentItem}>
                                <Image source={item.icon} style={{width:40,height:40}} />
                                <View style={styles.tabContentItemTitle}>
                                    <View style={styles.tabContentItemTitleTop}>
                                        <Text style={{fontSize:16}}>{item.title}</Text>
                                        <View style={styles.tabContentItemTitleTopTag}><Text style={{color:'#ea9518',fontSize:10}}>{item.tag}</Text></View>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,color:'#777',marginTop:5}}>
                                            {item.discription}
                                        </Text>
                                    </View>
                                </View>
                                    <View  style={styles.tabContentItemPrice}>
                                        <Text style={{color:'#ffffff'}}>¥{item.price}</Text>
                                    </View>

                            </View>
                        )
                    })}
                </View>
            )
        }else if(e==2){
            con=(
                <View style={styles.tabContent}>
                    {this.state.goldList.map((item,i)=>{
                        return(
                            <View key={i} style={styles.tabContentItem}>
                                <Image source={item.icon} style={{width:40,height:40}} />
                                <View style={styles.tabContentItemTitle}>
                                    <Text style={{fontSize:16}}>{item.title}</Text>
                                </View>
                                <View  style={styles.tabContentItemPrice}>
                                    <Text style={{color:'#ffffff'}}>¥{item.price}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        }
        return con;
    }

    render() {
        let currentIdex=this.state.currentIndex;
        let tabContent=this.renderTabContent(this.state.currentIndex);
        let select={borderBottomWidth:3,borderBottomColor:'#FF66CC',paddingBottom:10};
        let noSelect={borderBottomWidth:3,borderBottomColor:'#fff',paddingBottom:10}
        let navCheck1=currentIdex==1?select:noSelect;
        let navCheck1Text=currentIdex==1?{color:'#FF66CC'}:{color:'#777'};
        let navCheck2=currentIdex==2?select:noSelect;
        let navCheck2Text=currentIdex==2?{color:'#FF66CC'}:{color:'#777'};
        return (
            <ScrollView style={styles.userInfoTop}>
                <View style={styles.topBanner}>
                    <Image source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/207.jpg'}} style={{width:width,height:150,}} />
                </View>
                    <View style={styles.userGold}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'#555'}}>金币余额：</Text>
                        <Text style={{fontSize:16,color:'#ff0000'}}>1001</Text>
                    </View>
                <View style={styles.rechargeDetail}>

                    <View style={styles.reahargeBtn}>
                        <TouchableHighlight style={navCheck1} onPress={()=>{
                            this.setState({
                                currentIndex:1
                            })
                        }}
                                            underlayColor='rgba(0,0,0,0)'>
                            <Text style={navCheck1Text}>开通会员</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.reahargeBtn]} >
                        <TouchableHighlight style={navCheck2} onPress={()=>{
                            this.setState({
                                currentIndex:2
                            })
                        }}
                                            underlayColor='rgba(0,0,0,0)'>
                        <Text style={navCheck2Text}>金币充值</Text>
                        </TouchableHighlight>
                    </View>

                </View>



                {tabContent}
                <View>
                    <Text style={styles.vipSpecilServerTitle}>会员特权</Text>
                    <View style={styles.vipServerList}>
                        {
                            this.state.vipServerList.map((item,i)=>{
                                return(  <View style={styles.vipServerItem}>
                                    <Image source={item.icon} style={{width:30,height:30,}} />
                                    <Text style={styles.vipSpecilServerItemTitle}>{item.title}</Text>
                                </View>)
                            })
                        }
                    </View>

                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    userAvatar:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:150,
        backgroundColor:'#FFFFFF'
    },
    userGold:{
        backgroundColor:'#ffffff',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    rechargeDetail:{
        width:width,
        paddingTop:10,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    reahargeBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    tabContent:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#ffffff',
        marginTop:10
    },
    tabContentItem:{
        paddingBottom:15,
        paddingTop:15,
        flexDirection:'row',
        borderBottomColor:'#f3f3f3',
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'center',
    },
    tabContentItemTitle:{
        flex:1,
        marginLeft:10,
    },
    tabContentItemPrice:{
        backgroundColor:'#dd6572',
        padding:5,
        borderRadius:26,
        paddingLeft:10,
        paddingRight:10,
        fontSize:16,
        marginRight:10
    },
    tabContentItemTitleTop:{
        flexDirection:'row',
    },
    tabContentItemTitleTopTag:{
        padding:3,
        borderColor:'#ea9518',
        backgroundColor:'#f6f2e9',
        borderWidth:1,
        borderRadius:10,
        marginLeft:10,
    },
    vipServerList:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        flexWrap:'wrap',
        backgroundColor:'#ffffff'
    },
    vipServerItem:{
        width:(width-20)/3,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:70,
    },
    vipSpecilServerTitle:{
        width:'100%',
        textAlign:"center",
        height:40,
        fontSize:16,
        color:"#777",
        lineHeight:40,
        backgroundColor:'#ffffff',
        marginTop:10,
        marginBottom:0.5
    },
    vipSpecilServerItemTitle:{
        color:'#777',
        marginTop:10,

    }
});
