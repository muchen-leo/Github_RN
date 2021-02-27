import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MyPage from '../page/MyPage';
import FavoritePage from '../page/FavoritePage';
import TrendingPage from '../page/TrendingPage';
import PopularPage from '../page/PopularPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import NavigationUtil from '../navigator/NavigationUtil';
export default class HomePage extends Component {

/*   _tabNavigator() {
    return createAppContainer(
      createBottomTabNavigator({
        PopularPage: {
          screen: PopularPage,
          navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
              <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
            ),
          },
        },
        TrendingPage: {
          screen: TrendingPage,
          navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
              <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}} />
            ),
          },
        },
        FavoritePage: {
          screen: FavoritePage,
          navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
              <Entypo name={'user'} size={26} style={{color: tintColor}} />
            ),
          },
        },
        MyPage: {
          screen: MyPage,
          navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
              <Entypo name={'user'} size={26} style={{color: tintColor}} />
            ),
          },
        },
      }),
    );
  } */
  render() {
    //const Tab = this._tabNavigator();
    //FIX DynamicTabNavigator中的页面无法跳转到外层导航器页面的问题
    NavigationUtil.navigation=this.props.navigation;
    return <DynamicTabNavigator/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
