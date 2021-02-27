import React,{ Component } from 'react';
import {StyleSheet,Text,View,Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationUtil from '../navigator/NavigationUtil';
export default class WelcomePage extends Component{
    componentDidMount(){
        const {navigation} =this.props;
        this.timer=setTimeout(()=>{
            //跳转到首页
            NavigationUtil.resetToHomePage(this.props);
           
        },1000);
    }
    UNSAFE_componentWillMount(){
        //页面销毁时，清空定时器
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return(   
            <View style={styles.container}>
                <Text>WelcomePage</Text>
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color:'red'}}
                    />
                      <Button title={'Go to Page1'} 
                       onPress={() =>{
                        this.timer=setTimeout(()=>{
                            //跳转到首页
                            NavigationUtil.resetToHomePage(this.props);
                           
                        },1000);
                           }}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});