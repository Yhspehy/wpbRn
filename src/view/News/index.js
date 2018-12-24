import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const NewsStack = createStackNavigator({
  Home: HomeScreen
})

export default NewsStack
