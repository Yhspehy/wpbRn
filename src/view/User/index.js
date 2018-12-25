import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'

import UserScreen from './UserScreen'
import UserInfoScreen from './UserInfo/UserInfo'
import PasswordScreen from './UserInfo/Password'
import VerifyScreen from './UserInfo/Verify'
import FundDetailScreen from './FundDetail'

const UserStack = createStackNavigator(
  {
    Home: UserScreen,
    UserInfo: UserInfoScreen,
    Password: PasswordScreen,
    Verify: VerifyScreen,
    FundDetail: FundDetailScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default UserStack
