import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button,TextInput,AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action'
import DataStore from '../expand/dao/DataStore';

const KEY="save_key";
export default class DataStoreDemoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showText:''
        }
        this.dataStore =new DataStore();
    }
    loadData(){
        let url=`http://api.github.com/search/repositories?q=${this.value}`;
        this.dataStore.fetchData(url)
        .then(data=>{
            let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
            this.setState({
                showText:showData
            })
        })
        .catch(error=>{
            error && console.log(error.toString());
        })
    }
   
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>离线缓存框架设计</Text>
                <TextInput
                style={styles.input}
                onChangeText={text=>{
                    this.value = text;
                }}
                />
                 <Text onPress={()=>{
                        this.loadData();
                    }}>
                        获取
                </Text>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }
   
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        /**
         * justifyContent
         * 在组件的 style 中指定justifyContent可以决定其子元素沿着主轴的排列方式。
         */
        //justifyContent:'center',
        /**
         * alignItems
         * alignItems决定了子元素在次轴方向的排列方式（此样式设置在父元素上）。
         * 例如若子元素本来是沿着竖直方向排列的（即主轴竖直，次轴水平），
         * 则alignItems决定了它们在水平方向的排列方式。
         */
        //alignItems:'center',
        backgroundColor:'#F5FCFF',   
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    input:{
        height:40,
        borderColor:'black',
        borderWidth:1,
        marginRight:10,
    },
    input_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
});

