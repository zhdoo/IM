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
    Image,
    View,
    Dimensions,
    ScrollView,
    TouchableHighlight
} from 'react-native';


import  ImagePicker from 'react-native-image-picker'; //第三方相机
var options = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
const { width} = Dimensions.get('window')
const itemWidth=Dimensions.get('window').width
const picSize=((itemWidth-38)/4)-4
export default class Center extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: [],

        }
    }
    static navigationOptions = {
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    };

    renderPicBtn(){
        if(this.state.avatarSource.length>3){
            return(<View style={{
                flexDirection:'row',
                borderWidth:1,
                borderColor:'#f3f3f3',
                alignItems: 'center',width:30,height:picSize,margin:4}}><Text style={{width:20,marginLeft:4,textAlign:'center',color:'#777'}}>查看更多</Text></View>)
        }else{
            return( <TouchableHighlight onPress={()=>{
                ImagePicker.showImagePicker(options, (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    }
                    else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    }
                    else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    }
                    else {
                        let source = { uri: response.uri };

                        // You can also display the image using data:
                        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                        let avatarSource=this.state.avatarSource;
                        avatarSource.push(source)
                        this.setState({
                            avatarSource: avatarSource
                        });
                    }
                });
            }}
                                        underlayColor='rgba(0,0,0,0)'>
                <View style={styles.centerImageUpload}>
                    <Text style={{fontSize:50,color:'#777'}}>+</Text>
                    <Text style={{fontSize:12,color:'#777'}}>上传图片</Text>
                </View>
            </TouchableHighlight>)
        }
    }

    render() {

        return (
            <ScrollView style={{backgroundColor:'#f3f3f3'}}>
                <View  style={styles.centerTop}>
                    <Image source={require('../images/timg.jpeg')} style={{width,height:250,opacity:0.4,backgroundColor:'#fff'}}/>
                    <View style={styles.centerMyInfo}>
                        <Image source={require('../images/timg.jpeg')} style={styles.centerMyHeaderPic}/>
                        <Text style={styles.centerMyNickname}>我很帅的</Text>
                        <Text style={{color:'#fff'}}>12321321</Text>
                        <View  style={styles.centerTopBtn} >
                            <View style={styles.centerTopBtnItem}><Text style={{color:'#fff'}}>0</Text><Text style={{color:'#fff'}}>动态</Text></View>
                            <View style={styles.centerTopBtnItem1}><Text style={{color:'#fff'}}>2</Text><Text style={{color:'#fff'}}>关注</Text></View>
                            <View style={styles.centerTopBtnItem}><Text style={{color:'#fff'}}>3</Text><Text style={{color:'#fff'}}>谁看过我</Text></View>
                        </View>
                    </View>
                </View>
                <View style={styles.centerImageList}>
                    {
                        this.state.avatarSource.map((item,i)=> {
                            return( <Image key={i} source={item} style={{width:picSize, height:picSize,marginTop:4,marginLeft:4,marginBottom:4}}/>)
                        })

                    }
                    {this.renderPicBtn()}

                </View>
                <View style={styles.centerContenNav}>
                    <TouchableHighlight onPress={(e)=>{
                            this.props.navigation.navigate('SpecilServe')
                    }}>
                    <View style={[styles.centerContentNavItem]} >
                        <Image source={require('../images/specil.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>特权服务</Text>
                        <Text style={styles.centercontenNavTextInfo}>3.3折优惠</Text>
                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e)=>{
                        this.props.navigation.navigate('ChengXin')
                    }}>
                    <View style={[styles.centerContentNavItem]}>
                        <Image source={require('../images/chengxin.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>诚信等级</Text>

                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e)=>{
                        this.props.navigation.navigate('MyDoc')
                    }}>
                    <View style={[styles.centerContentNavItem]}>
                        <Image source={require('../images/mydoc.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>我的资料</Text>

                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e)=>{
                        this.props.navigation.navigate('FriendRequire')
                    }}>
                    <View style={[styles.centerContentNavItem]}>
                        <Image source={require('../images/addfriends.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>征友条件</Text>

                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.centerContenNav}>
                    <TouchableHighlight onPress={(e)=>{
                        this.props.navigation.navigate('WaiterHelp')
                    }}>
                    <View style={[styles.centerContentNavItem]}>
                        <Image source={require('../images/help.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>客服帮助</Text>

                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e)=>{
                        this.props.navigation.navigate('Settings')
                    }}>
                    <View style={[styles.centerContentNavItem]}>
                        <Image source={require('../images/set.png')} style={styles.centerContentNavIcon}/>
                        <Text style={styles.centerContentNavText}>设置</Text>

                        <Image source={require('../images/more.png')} style={styles.centerContentNavIcon}/>
                    </View>
                    </TouchableHighlight>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    centerContenNav:{
        width:itemWidth,
        flexDirection:'column',
        marginTop:10
    },

    centerContentNavItem:{
        width:itemWidth,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        backgroundColor:"#ffffff",
        height:50,
        alignItems: 'center',
    },
    centerContentNavIcon:{
      width:25,
      height:25,
        marginLeft:10,
        marginRight:10,
    },
    centerContentNavText:{
        flex:1,
        color:"#777"
    },
    centercontenNavTextInfo:{
        fontSize:12,
        color:"#ff0000"
    },
    centerImageList:{
        flexDirection:'row',
        backgroundColor:"#fff",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
    }
    ,
    centerImageUpload:{
        width:picSize,
        margin:4,
        height:picSize,
        marginLeft:4,
        borderWidth:1,
        borderColor:"#ddd",
        alignItems: 'center',

    },
    centerTop:{
        width,
        height:250,
        backgroundColor:'#000'
    },
    centerMyInfo:{
        position:"absolute",
        top:30,
        width:"80%",
        marginLeft:'10%',
        height:200,
        flexDirection:'column',
        alignItems: 'center',
        // backgroundColor:"#000"
    },
    centerMyHeaderPic:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20,
        borderWidth:2,
        borderColor:'#fff'
    },
    centerMyNickname:{
        width,
        height:30,
        lineHeight:30,
        textAlign:'center',
        color:'#fff'
    },

    centerTopBtn:{
         flexDirection:'row',
        position:"absolute",
        top:170,
        height:40
    },
    centerTopBtnItem:{
        width:itemWidth/3,
        alignItems:'center',
        height:40,
        justifyContent:'center',
    },
    centerTopBtnItem1:{
        width:(itemWidth/3)-2,
        alignItems:'center',
        height:40,
        borderLeftWidth:1,
        borderLeftColor:"#fff",
        borderRightWidth:1,
        borderRightColor:"#fff",
        justifyContent:'center',
    },
    centerImages:{
        width,
        height:80,
        backgroundColor:'#fff',
        marginTop:5
    },
});
