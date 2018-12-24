import React from 'react'
import Ionicons from 'react-native-vector-icons/FontAwesome5'

import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '外盘吧',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff',
    headerLeft: (
      <Ionicons style={{ marginLeft: 20 }} name="qq" size={20} color="#fff" />
    ),
    headerRight: (
      <Ionicons
        style={{ marginRight: 20 }}
        name="info-circle"
        size={20}
        color="#fff"
      />
    )
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 36 }}>some112</Text>
      </SafeAreaView>
    )
  }
}
