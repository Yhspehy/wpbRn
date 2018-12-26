import React from 'react'

import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class Verify extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: '#adadad', marginTop: 10 }}>暂无记录</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    flex: 1,
    paddingTop: 10,
    alignItems: 'center'
  }
})
