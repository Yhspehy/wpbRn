import React from 'react' // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation'

import NewsScreen from './NewsScreen'
import NewsDetailScreen from './NewsDetail'

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
    NewsDetail: NewsDetailScreen
  },
  {
    initialRouteName: 'News'
  }
)

NewsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export default NewsStack
