import React from 'react' // eslint-disable-line no-unused-vars
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'

import TradeScreen from './TradeScreen'
import Buy from './Buy'
import Hold from './Hold'
import HeaderRight from './components/HeaderRight'

const HeaderTab = createMaterialTopTabNavigator(
  {
    Buy,
    Hold
  },
  {
    initialRouteName: 'Buy',
    navigationOptions: {
      title: '交易',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#d42b2e'
      },
      headerTintColor: '#fff',
      headerRight: <HeaderRight />
    },
    // eslint-disable-next-line react/display-name
    tabBarComponent: props => <TradeScreen {...props} />,
    tabBarOptions: {
      showLabel: false
    }
  }
)

const TradeStack = createStackNavigator({
  Trade: HeaderTab
})

export default TradeStack
