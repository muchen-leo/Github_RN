import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action'
import NavigationUtil from '../navigator/NavigationUtil';

class MyPage extends Component{
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>MyPage</Text>
                <Button
                title={'修改主题'}
                onPress={()=>this.props.onThemeChange('#8a3')}/>
                 <Text
          onPress={() => {
            NavigationUtil.goPage({}, 'DetailPage');
          }}>
          跳转到详情页
        </Text>
        <Button
          title={'Fetch 使用'}
          onPress={() => {
            NavigationUtil.goPage({}, 'FetchDemoPage');
          }}
        />
         <Button
          title={'AsyncStorage 使用'}
          onPress={() => {
            NavigationUtil.goPage({}, 'AsyncStorageDemoPage');
          }}
        />
        <Button
          title={'离线缓存框架'}
          onPress={() => {
            NavigationUtil.goPage({navigation:this.props.navigation}, 'DataStoreDemoPage');
          }}
        />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',   
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
});
const mapDispatchToProps=dispatch=>({
    onThemeChange:theme=>dispatch(actions.onThemeChange(theme)),
});
export default connect(null,mapDispatchToProps)(MyPage);