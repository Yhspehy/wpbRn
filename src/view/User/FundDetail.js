import React from 'react'

import { StyleSheet, View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class Verify extends React.Component {
  static navigationOptions = {
    title: '全部明细',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      idCard: '',
      list: [
        {
          key: '0',
          title: '抵用金变更',
          change: 45,
          all: 45,
          time: '2018-10-23 18:12:40'
        },
        {
          key: '2',
          title: '抵用金变更',
          change: 45,
          all: 45,
          time: '2018-10-23 18:12:40'
        }
      ]
    }
  }

  _renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ flex: 3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.marginTop}>{item.time}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>收入</Text>
        <Text style={[styles.marginTop, { color: '#e34c4c' }]}>
          {item.change}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>余额</Text>
        <Text style={styles.marginTop}>{item.all}</Text>
      </View>
    </View>
  )

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={{ color: '#212121' }}>
            账户余额 <Text style={{ color: '#e34c4c' }}>45.00</Text>
          </Text>
        </View>
        <FlatList data={this.state.list} renderItem={this._renderItem} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    flex: 1,
    paddingTop: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f1f2f3',
    borderStyle: 'solid'
  },
  title: {
    color: '#212121',
    fontWeight: '200'
  },
  marginTop: {
    marginTop: 10,
    color: '#adadad'
  }
})
