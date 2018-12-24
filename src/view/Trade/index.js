import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const TradeStack = createStackNavigator({
  Home: HomeScreen
})

export default TradeStack
