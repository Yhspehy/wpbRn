import React from 'react' // eslint-disable-line no-unused-vars
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'

import HomeStack from '../view/Home/index'
import NewsStack from '../view/News/index'
import TradeStack from '../view/Trade/index'
import UserStack from '../view/User/index'

export default createBottomTabNavigator(
  {
    首页: HomeStack,
    交易: TradeStack,
    资讯: NewsStack,
    我的: UserStack
  },
  {
    initialRouteName: '资讯',
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case '首页':
            iconName = 'ios-home'
            break
          case '资讯':
            iconName = 'ios-analytics'
            break
          case '交易':
            iconName = 'ios-appstore'
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
