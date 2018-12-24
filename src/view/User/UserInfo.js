import React from 'react'
import Ionicons from 'react-native-vector-icons/AntDesign'

import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '我的账户',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 36 }}>some1222</Text>
      </SafeAreaView>
    )
  }
}
