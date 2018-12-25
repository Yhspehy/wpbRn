import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'

import UserScreen from './UserScreen'
import UserInfoPage from './UserInfo'

const UserStack = createStackNavigator(
  {
    Home: {
      screen: UserScreen
    },
    UserInfo: {
      screen: UserInfoPage
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default UserStack
