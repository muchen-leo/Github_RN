import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';
export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'ios', 'React', 'React Native', 'PHP'];
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: (props) => <PopularTabPage {...props} tabLael={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        this._genTabs(),
        {
          tabBarOptions: {
            tabStyle: styles.tabStyle,
            upperCaseLabel: false, //默认是否大写
            scrollEnabled: true, //是否滚动
            style: {
              backgroundColor: '#a67',
            },
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle,
          },
        },
        /*  {
                PopularTab1:{
                    screen:PopularTab,
                    navigationOptions:{
                        title:'Tab1',
                    }
                },
                PopularTab2:{
                    screen:PopularTab,
                    navigationOptions:{
                        title:'Tab2',
                    }
                },
            } */
      ),
    );
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props);
    const {tabLael} = this.props;
    this.storeName = tabLael;
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const {onLoadPopularData} = this.props;
    const url = this.genFetchUrl(this.storeName);
    onLoadPopularData(this.storeName, url);
  }
  genFetchUrl(key) {
    return URL + key + QUERY_STR;
  }
  renderItem(data) {
    const item = data.item;
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{backgroundColor: '#faa'}}>{JSON.stringify(item)}</Text>
      </View>
    );
  }
  render() {
    const {popular} = this.props;
    let store = popular[this.storeName]; //动态获取state
    if (!store) {
      store = {
        items: [],
        isLoading: false,
      };
    }
    return (
      //注意属性位置！！！
      <View>
        <FlatList
          data={store.items}
          renderItem={(data) => this.renderItem(data)}
          keyExtractor={(item) => '' + item.id}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={THEME_COLOR}
              colors={[THEME_COLOR]}
              refreshing={store.isLoading}
              onRefresh={() => this.loadData()}
              tintColor={THEME_COLOR}
            />
          }></FlatList>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  popular: state.popular,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadPopularData: (storeName, url) =>
    dispatch(actions.onLoadPopularData(storeName, url)),
});
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});
