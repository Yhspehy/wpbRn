import React from 'react' // eslint-disable-line no-unused-vars
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import UserScreen from './UserScreen'
import UserInfoScreen from './UserInfo/UserInfo'
import PasswordScreen from './UserInfo/Password'
import VerifyScreen from './UserInfo/Verify'
import FundDetailScreen from './FundDetail'
import PromotionTabComponent from './Promotion/PromotionTab'
import EarnMoney from './Promotion/EarnMoney'
import MyUser from './Promotion/MyUser'
import InvestScreen from './Invest'

const PromotionTab = createMaterialTopTabNavigator(
  {
    EarnMoney,
    MyUser
  },
  {
    initialRouteName: 'EarnMoney',
    navigationOptions: {
      title: '推广赚钱',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#d42b2e'
      },
      headerTintColor: '#fff'
    },
    // eslint-disable-next-line react/display-name
    tabBarComponent: props => <PromotionTabComponent {...props} />,
    tabBarOptions: {
      showLabel: false
    }
  }
)

const UserStack = createStackNavigator(
  {
    User: UserScreen,
    UserInfo: UserInfoScreen,
    Password: PasswordScreen,
    Verify: VerifyScreen,
    FundDetail: FundDetailScreen,
    Promotion: PromotionTab,
    Invest: InvestScreen
  },
  {
    initialRouteName: 'User'
  }
)

UserStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export default UserStack
