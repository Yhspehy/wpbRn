import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'
import TradeScreen from './TradeScreen'

const TradeStack = createStackNavigator({
  Trade: TradeScreen
})

export default TradeStack
