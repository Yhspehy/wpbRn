import React from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Bar } from 'react-native-progress'
import Row from '../components/Row'

export default class UserInfoPage extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.safeLevel}>
          <Text>安全级别</Text>
          <Bar
            style={{ marginLeft: 10 }}
            progress={0.4}
            width={80}
            height={10}
            borderRadius={5}
            color="#d42b2e"
            unfilledColor="f1f2f3"
          />
        </View>
        <View>
          <View style={styles.listItem}>
            <Row
              iconName="wallet"
              iconColor="#fa8562"
              text="实名认证"
              fontSize={16}
              route="UserInfo"
              rightText="未实名认证"
              rightTextColor="#ff8726"
              navigation={() => this.props.navigation.push('Verify')}
            />
          </View>
          <View style={styles.listItem}>
            <Row
              iconName="user"
              iconColor="#fa8562"
              text="提款银行卡"
              rightText="未绑定"
              rightTextColor="#ff8726"
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
              navigation={() => this.props.navigation.push('Password')}
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
    flex: 1
  },
  safeLevel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10
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
