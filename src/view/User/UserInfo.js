import React from 'react'

import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Row from './Row'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.listItem}>
            <Row
              iconName="wallet"
              iconColor="#fa8562"
              text="实名认证"
              fontSize={16}
              route="UserInfo"
              rightText="未实名认证"
              navigation={() => this.props.navigation.push('UserInfo')}
            />
          </View>
          <View style={styles.listItem}>
            <Row
              iconName="user"
              iconColor="#fa8562"
              text="提款银行卡"
              rightText="未绑定"
              fontSize={16}
              navigation={() => this.props.navigation.push('UserInfo')}
            />
          </View>
          <View style={styles.listItem}>
            <Row
              iconName="notification"
              iconColor="#f39943"
              text="手机绑定"
              disableIcon={true}
              rightText="150****3445"
              fontSize={16}
              navigation={() => this.props.navigation.push('UserInfo')}
            />
          </View>
          <View style={[styles.details, styles.listItem]}>
            <Row
              iconName="adduser"
              iconColor="#27bc9c"
              text="登录密码"
              rightText="已设置"
              fontSize={16}
              navigation={() => this.props.navigation.push('UserInfo')}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    paddingTop: 10,
    flex: 1
  },
  details: {
    marginTop: 10,
    marginBottom: 10
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff'
  }
})
