import React from 'react';
import MyPage from '../page/MyPage';
import FavoritePage from '../page/FavoritePage';
import TrendingPage from '../page/TrendingPage';
import PopularPage from '../page/PopularPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createAppContainer} from 'react-navigation';
import {BottomTabBar, createBottomTabNavigator} from 'react-navigation-tabs';
import {DatePickerAndroid} from 'react-native';
import {connect} from 'react-redux';
const TABS = {
  //在这里配置页面路由
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
        <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{color: tintColor}}
        />
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
};
class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true; //关闭黄色警告弹框
  }
  _tabNavigator() {
    //优化了频繁创建导航器的性能消耗
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    PopularPage.navigationOptions.tabBarLabel = '最热0'; //动态修改TAB属性
    return (this.Tabs = createAppContainer(
      createBottomTabNavigator(tabs, {
        //tabBarComponent:TabBarComponent,
        tabBarComponent: (props) => {
          return <TabBarComponent theme={this.props.theme}{...props} />;
        },
      }),
    ));
  }
  render() {
    //导航器应该使用jsx的语法使用
    const Tab = this._tabNavigator();
    return <Tab />;
  }
}
class TabBarComponent extends React.Component {
  /*  constructor(props){
        super(props);
        this.theme={
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime(),
        };
    } */
  render() {
    /*       const {routes,index} = this.props.navigation.state;
        if (routes[index].params){
            const {theme} = routes[index].params;
            //以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
            if(theme && theme.updateTime > this.theme.updateTime){
                this.theme = theme;
            }
        } */
    return (
      <BottomTabBar
        {...this.props}
        //activeTintColor = {this.theme.tintColor || this.props.activeTintColor}
        activeTintColor={this.props.theme}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps)(DynamicTabNavigator);
