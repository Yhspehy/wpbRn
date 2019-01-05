import React from 'react' // eslint-disable-line no-unused-vars
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import HomeStack from '../view/Home/index'
import NewsStack from '../view/News/index'
import TradeStack from '../view/Trade/index'
import UserStack from '../view/User/index'

import LoginScreen from '../view/Auth/Login'
import RegisterScreen from '../view/Auth/Register'
import RegisterComfirmScreen from '../view/Auth/RegisterComfirm'

import NewsDetailScreen from '../view/News/NewsDetail'

const tab = createBottomTabNavigator(
  {
    首页: HomeStack,
    交易: TradeStack,
    资讯: NewsStack,
    我的: UserStack
  },
  {
    initialRouteName: '首页',
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case '首页':
            iconName = 'ios-home'
            break
          case '交易':
            iconName = 'ios-appstore'
            break
          case '资讯':
            iconName = 'ios-analytics'
            break
          case '我的':
            iconName = 'ios-person'
            break
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    })
  }
)
export default createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    RegisterComfirm: RegisterComfirmScreen,
    NewsDetail: NewsDetailScreen,
    Tab: {
      screen: tab,
      navigationOptions: () => ({
        header: null,
        headerBackTitle: null
      })
    }
  },
  {
    initialRouteName: 'Login'
  }
)
