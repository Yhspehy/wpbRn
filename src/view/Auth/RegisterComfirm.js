import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Platform
} from 'react-native'
import { StackActions, NavigationActions, SafeAreaView } from 'react-navigation'
import Toast from '../../utils/toast'
import CheckBox from './CheckBox'
import { register } from '../../utils/user'
import { cmdId } from '../../config/config'

export default class Verify extends React.Component {
  static navigationOptions = {
    title: '免费注册',
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      password: '',
      comfirm: '',
      isChecked: false
    }
    this.myRef = React.createRef()
  }

  _register = () => {
    if (!this.state.nickname || !this.state.password || this.state.comfirm) {
      this.myRef.current.show('请完善内容')
      return
    }
    if (this.state.password !== this.state.comfirm) {
      this.myRef.current.show('两次输入的密码不一致')
      return
    }
    const platform = Platform.os === 'ios' ? 1 : 2
    const { navigation } = this.props
    const _mobile = navigation.getParam('mobile', '')
    const msgCode = navigation.getParam('msgCode', '')
    const body = JSON.stringify({
      mobile: _mobile,
      code: msgCode,
      nick_name: this.state.nickname,
      password: this.state.password,
      plat_form: platform,
      ref_id: '', // 邀请人id
      client_id: '', // 设备号
      cmp_id: cmdId
    })

    register(body).then(res => {
      console.log(res)
    })
  }

  render() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    })
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.leftText}>昵称</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入昵称"
            onChangeText={text => this.setState({ nickname: text })}
            value={this.state.nickname}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>登录密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入登录密码"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>确认密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请确认您的登录密码"
            onChangeText={text => this.setState({ comfirm: text })}
            value={this.state.comfirm}
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10
          }}
        >
          <CheckBox
            style={{ marginRight: 10, marginLeft: 10 }}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
          />
          <Text
            style={{
              color: '#212121',
              fontSize: 12
            }}
          >
            我已阅读并同意
            <Text style={styles.blueText}>国际原油宝服务协议 </Text>及
            <Text style={styles.blueText}> 隐私政策 </Text>
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => {
            this._register()
            // this.props.navigation.dispatch(resetAction)
          }}
          style={[
            styles.btn,
            {
              marginTop: 20,
              height: 40,
              backgroundColor: '#d42b2e',
              borderColor: '#fff'
            }
          ]}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
            立即注册
          </Text>
        </TouchableHighlight>

        <Toast ref={this.myRef} />
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
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 6,
    paddingTop: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f1f2f3',
    borderStyle: 'solid'
  },
  leftText: {
    color: '#212121',
    width: 80,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '100'
  },
  input: {
    padding: 0,
    height: 40,
    width: 140
  },
  btn: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderRadius: 3,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueText: {
    color: '#249fed'
  }
})
