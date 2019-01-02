import React from 'react'
import { Picker } from 'react-native'

export default class HeaderRight extends React.Component {
  state = {
    language: 'Java'
  }
  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
  }
}
