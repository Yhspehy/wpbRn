import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class PromotionTab extends React.Component {
  state = {
    routeName: 'Buy'
  }

  clickTab = name => {
    this.setState({ routeName: name })
    this.props.navigation.navigate(name)
  }

  _renderLine = () => <View style={styles.line} />

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => this.clickTab('Buy')}
        >
          <Text
            style={{
              color: this.state.routeName === 'Buy' ? '#d42b2e' : '#212121'
            }}
          >
            买单下单
          </Text>
          {/* {this.state.routeName === 'Buy' && this._renderLine()} */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => this.clickTab('Hold')}
        >
          <Text
            style={{
              color: this.state.routeName === 'Bold' ? '#d42b2e' : '#212121'
            }}
          >
            实盘持仓
          </Text>
          {/* {this.state.routeName === 'Hold' && this._renderLine()} */}
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tab: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    width: 80,
    height: 1,
    backgroundColor: '#d42b2e',
    position: 'absolute',
    bottom: 0
  }
})
