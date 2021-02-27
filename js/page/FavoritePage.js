import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action'

class FavoritePage extends Component{
    render(){
        const {navigation}=this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>FavoritePage</Text>
                <Button
                title={'修改主题'}
/*                 onPress={()=>navigation.setParams(
                    {
                        theme:{
                            tintColor:'orange',
                            updateTime:new Date().getTime(),
                        }
                    }
                )} */
                onPress={()=>this.props.onThemeChange('#021')}/>
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
export default connect(null,mapDispatchToProps)(FavoritePage);