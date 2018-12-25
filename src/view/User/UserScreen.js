import React from 'react'
import Ionicons from 'react-native-vector-icons/AntDesign'

import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Row from './components/Row'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '我的账户',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff',
    headerLeft: (
      <Ionicons style={{ marginLeft: 20 }} name="QQ" size={20} color="#fff" />
    ),
    headerRight: (
      <Ionicons
        style={{ marginRight: 20 }}
        name="logout"
        size={20}
        color="#fff"
      />
    )
  }

  render() {
    const User = (
      <View style={styles.userInfo}>
        <Row
          iconName="user"
          iconColor="#adadad"
          text="lipei"
          navigation={() => this.props.navigation.push('UserInfo')}
        />
      </View>
    )

    const Money = (
      <View style={styles.money}>
        <Text style={{ marginBottom: 10, fontSize: 15 }}>账户余额</Text>
        <Text style={{ marginBottom: 10 }}>
          <Text style={{ color: '#d42b2e', fontSize: 18 }}>45.00 </Text>
          <Text style={{ color: '#7a7a7a', fontSize: 12 }}>元</Text>
        </Text>
        <Text style={{ marginBottom: 10, color: '#7a7a7a', fontSize: 12 }}>
          （抵用卷：<Text style={{ color: '#d42b2e' }}>45</Text>元）
        </Text>
        <View style={styles.Row}>
          <View style={[styles.Row, { flex: 1 }]}>
            <TouchableHighlight
              onPress={() => {
                Alert.alert('你点击了充值！')
              }}
              style={[
                styles.btn,
                { backgroundColor: '#d42b2e', borderColor: '#fff' }
              ]}
            >
              <Text style={{ color: '#fff' }}>充值</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Alert.alert('你点击了提款！')
              }}
              style={[
                styles.btn,
                { backgroundColor: '#fff', borderColor: '#d42b2e' }
              ]}
            >
              <Text style={{ color: '#d42b2e' }}>提款</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )

    const List = (
      <View>
        <View style={[styles.details, styles.listItem]}>
          <Row
            iconName="wallet"
            iconColor="#fa8562"
            text="资金明细"
            fontSize={16}
            route="UserInfo"
            navigation={() => this.props.navigation.push('FundDetail')}
          />
        </View>
        <View style={styles.listItem}>
          <Row
            iconName="user"
            iconColor="#fa8562"
            text="账户设置"
            fontSize={16}
            navigation={() => this.props.navigation.push('UserInfo')}
          />
        </View>
        <View style={styles.listItem}>
          <Row
            iconName="notification"
            iconColor="#f39943"
            text="推广赚钱"
            fontSize={16}
            navigation={() => this.props.navigation.push('UserInfo')}
          />
        </View>
        <View style={styles.listItem}>
          <Row
            iconName="adduser"
            iconColor="#27bc9c"
            text="申请投资人"
            fontSize={16}
            navigation={() => this.props.navigation.push('UserInfo')}
          />
        </View>
      </View>
    )

    return (
      <SafeAreaView style={styles.container}>
        {User}
        {Money}
        {List}
      </SafeAreaView>
    )
  }
}

const row = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const styles = StyleSheet.create({
  Row: row,
  container: {
    backgroundColor: '#f1f2f3',
    paddingTop: 10,
    flex: 1
  },
  // 用户信息模块
  userInfo: {
    ...row,
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f3',
    borderStyle: 'solid'
  },
  //账户余额模块
  money: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  // 充值提款按钮
  btn: {
    flex: 1,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    marginTop: 10,
    marginBottom: 10
  },
  listItem: {
    ...row,
    padding: 16,
    backgroundColor: '#fff'
  }
})
