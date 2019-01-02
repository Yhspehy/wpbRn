import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class HeaderRight extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          marginRight: 10
        }}
        onPress={() => this.props.navigation.navigate('Verify')}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 12
          }}
        >
          规则
        </Text>
      </TouchableOpacity>
    )
  }
}
