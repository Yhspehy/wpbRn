import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '新闻'
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
