import React from 'react' // eslint-disable-line no-unused-vars

import { createBottomTabNavigator } from 'react-navigation'

import HomeStack from '../view/Home/index'

export default createBottomTabNavigator(
  {
    Home: HomeStack
  }
)
