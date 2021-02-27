import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import WelcomePage from '../page/WelcomePage';
import MyPage from '../page/MyPage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import FetchDemoPage from '../page/FetchDemoPage';
import AsyncStorageDemoPage from '../page/AsyncStorageDemoPage';
import DataStoreDemoPage from '../page/DataStoreDemoPage';
    
const InitNavigator = createStackNavigator(
    {
        WelcomePage:{
            screen:WelcomePage,
            navigationOptions:{
                headerShown:false//隐藏头部
            }
        }
    }
);
const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            headerShown:false,//隐藏头部
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            //header:null,//可以通过将hearder设置为null 来禁用StackNavigator的Navigator
        }
    },
    FetchDemoPage:{
        screen:FetchDemoPage,
        navigationOptions:{
            //header:null,//可以通过将hearder设置为null 来禁用StackNavigator的Navigator
        }
    },
    AsyncStorageDemoPage:{
        screen:AsyncStorageDemoPage,
        navigationOptions:{
            //header:null,//可以通过将hearder设置为null 来禁用StackNavigator的Navigator
        }
    },
    DataStoreDemoPage:{
        screen:DataStoreDemoPage,
        navigationOptions:{
            //header:null,//可以通过将hearder设置为null 来禁用StackNavigator的Navigator
        }
    },
});
export default createAppContainer(createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
},{
    navigationOptions:{
        headerShown:false
    }
}));