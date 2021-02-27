import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button,TextInput } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action'

export default class FetchDemoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showText:''
        }
    }
    loadData(){
        let url=`http://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
        .then(response => response.text())
        .then(responseText =>{
            this.setState({
                showText:responseText
            })
        })
    }
    loadData2(){
        let url=`http://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
        .then(response => {
            if(response.ok){
                return response.text();
            }
            throw new Error('Netawork response was no ok');
        })
        .then(responseText =>{
            this.setState({
                showText:responseText
            })
        })
        .catch(e => {
            this.setState({
                showText:e.toString()
            })
        })
    }
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Fetch使用</Text>
                <View style={styles.input_container}>

                <TextInput
                style={styles.input}
                onChangeText={text=>{
                    this.searchKey = text;
                }}
                />
                <Button
                title="获取"
                onPress={()=>{
                    this.loadData2();
                }}/>
                </View>
                
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
        alignItems:'center',
        backgroundColor:'#F5FCFF',   
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    input:{
        height:30,
        flex:1,
        borderColor:'black',
        borderWidth:1,
        marginRight:10,
    },
    input_container:{
        flexDirection:'row',
        alignItems:'center'
    }
});

