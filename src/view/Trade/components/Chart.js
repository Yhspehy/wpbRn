import React from 'react'
import { WebView } from 'react-native'

export default class Chart extends React.Component {
  render() {
    return (
      <WebView
        style={{
          width: 375,
          height: 300
        }}
        useWebKit={true}
        originWhitelist={['*']}
        source={{ url: 'http://localhost:3000/trade/buy/4/0' }}
      />
    )
  }
}
