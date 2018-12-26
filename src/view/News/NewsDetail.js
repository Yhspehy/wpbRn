import React from 'react'
import { Text, WebView } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '详情',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  state = {
    data: {}
  }

  componentDidMount() {
    const id = this.props.navigation.getParam('id', 20812)
    // eslint-disable-next-line no-undef
    fetch(`http://api.waipan8.com/Home/GetNewsOne?id=${id}`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  render() {
    const overWriteFontColor = `<div style="color: #212121">${
      this.state.data.text
    }</div>`

    const overWriteSomeTag = overWriteFontColor
      .replace(/<a/g, '<a style="color: #212121;text-decoration:none;"')
      .replace(/<img/g, '<img style="width: 100%"')
    return (
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <Text style={{ color: '#212121', fontSize: 17 }}>
          {this.state.data.title}
        </Text>
        <Text
          style={{
            color: '#adadad',
            fontSize: 11,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          {this.state.data.created_at}
        </Text>
        <WebView
          useWebKit={true}
          originWhitelist={['*']}
          tagsStyles={{ p: { color: '#7a7a7a' } }}
          source={{ html: overWriteSomeTag }}
        />
      </SafeAreaView>
    )
  }
}
