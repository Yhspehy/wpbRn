import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

export default class Invest extends React.Component {
  static navigationOptions = {
    title: '申请投资人',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  state = {
    demand: [
      '年满18周岁，具有完全民事行为能力',
      '有200万投资资金，20万交易合作的履约保证金',
      '炒期经历不少于3年(以期货账号交易记录为准)',
      '同意并接受《用户与投资人交易合作协议》，按协议承担风险和享有收益',
      '需在指定券商开户',
      '合作过程能严格执行用户交易策略',
      '开通外盘吧账户',
      '通过申请审核后，需至外盘吧运营方现场签署相关协议'
    ],
    risk: [
      '需承担合作交易跌幅超过用户最大承担范围的亏损风险',
      '需承担网络通讯、系统等不可控的造成的投资亏损风险',
      '需承担券商以及交易所等系统故障造成的风险',
      '需知晓中止止损会因行情延迟以及发出止损指令的延时性造成的亏损风险',
      '需承担超出用户认可的时限内完成交易的价格偏差风险',
      '需承担交易合作可能不盈利导致无收益分享的风险'
    ]
  }

  list = lists => {
    return (
      <View>
        {lists.map((el, idx) => (
          <View key={idx} style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#7a7a7a' }}>{'\u2022  '}</Text>
            <Text style={{ color: '#7a7a7a', fontSize: 14, lineHeight: 20 }}>
              {el}
            </Text>
          </View>
        ))}
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.block}>
            <Text style={styles.title}>什么是外盘吧投资人</Text>
            <Text style={styles.text}>
              {'\t'}
              具有合法的期货投资资格，以自主的期货账户通过外盘吧与用户进行合作交易，按用户交易指令进行下单交易，并按合作协议和交易结果共享收益共担风险！
            </Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.title}>投资人的基本要求</Text>
            {this.list(this.state.demand)}
          </View>

          <View style={styles.block}>
            <Text style={styles.title}>投资人的重要风险提示</Text>
            <Text style={{ color: '#7a7a7a', lineHeight: 20 }}>
              {'\t'}作为投资人将面临的风险主要包括但不限于如下事项：
            </Text>
            {this.list(this.state.risk)}
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack(null)}
          style={styles.contact}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              fontWeight: '500'
            }}
          >
            联系客服
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    flex: 1
  },
  title: {
    color: '#212121',
    fontSize: 16,
    marginBottom: 10
  },
  text: {
    color: '#7a7a7a',
    fontSize: 14,
    lineHeight: 16
  },
  block: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10
  },
  contact: {
    backgroundColor: '#d42b2e',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 2
  }
})
