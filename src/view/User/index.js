import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'

import UserScreen from './UserScreen'
import UserInfo from './UserInfo'

const UserStack = createStackNavigator({
  Home: UserScreen,
  Info: UserInfo
})

export default UserStack
