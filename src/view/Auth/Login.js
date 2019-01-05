import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ImageBackground,
  Dimensions,
  Platform
} from 'react-native'
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation'

import { login, setToken, getUser } from '../../utils/user'
export default class Verify extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  }

  constructor(props) {
    super(props)
    this.state = {
      mobile: '',
      password: '',
      msg: ''
    }
  }

  _validMobile(mobile) {
    const reg = /^1[0-9]{10}$/
    if (!reg.test(this.state.mobile)) {
      this.setState({
        msg: '请输入手机号'
      })
      return false
    }
    this.setState({
      msg: ''
    })
    return true
  }

  _validPassword(pwd) {
    const reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$', 'g')
    if (!reg.test(this.state.password)) {
      this.setState({
        msg: '请输入密码'
      })
      return false
    }
    this.setState({
      msg: ''
    })
    return true
  }

  _login = () => {
    const ResetLogin = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Tab' })]
    })
    if (this._validMobile() && this._validPassword()) {
      const platform = Platform.os === 'ios' ? 1 : 2
      // eslint-disable-next-line no-undef
      const data = JSON.stringify({
        mobile: this.state.mobile,
        pass_word: this.state.password,
        plat_form: platform,
        client_id: ''
      })
      login(data).then(res => {
        setToken(res.data)
        getUser().then(user => {
          this.props.navigation.dispatch(ResetLogin)
        })
      })
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('./img/loginBg.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <SafeAreaView>
          <Image
            resizeMode="contain"
            source={require('./img/logo.png')}
            style={{
              marginTop: Dimensions.get('window').height * 0.1,
              marginLeft: Dimensions.get('window').width * 0.2,
              width: Dimensions.get('window').width * 0.6
            }}
          />
          <View
            style={[
              styles.row,
              {
                marginTop: 40,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
              }
            ]}
          >
            <Text style={styles.leftText}>手机</Text>
            <TextInput
              style={styles.input}
              placeholder="请输入手机号"
              onChangeText={text => this.setState({ mobile: text })}
              value={this.state.mobile}
              clearButtonMode="while-editing"
              textContentType="telephoneNumber"
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={[
              styles.row,
              {
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
              }
            ]}
          >
            <Text style={styles.leftText}>密码</Text>
            <TextInput
              style={styles.input}
              placeholder="请输入密码"
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              clearButtonMode="while-editing"
              textContentType="password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>

          {this.state.msg !== '' && (
            <Text style={{ color: 'red', marginLeft: 40, marginTop: 20 }}>
              {this.state.msg}
            </Text>
          )}

          <TouchableHighlight
            onPress={() => {
              this._login()
            }}
            style={[
              styles.btn,
              {
                height: 40,
                backgroundColor: '#d42b2e',
                borderColor: '#fff'
              }
            ]}
          >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
              登录
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Register')
            }}
            style={[
              styles.btn,
              {
                height: 40,
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,0.6)'
              }
            ]}
          >
            <Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 16,
                fontWeight: '500'
              }}
            >
              免费注册
            </Text>
          </TouchableHighlight>

          <View
            style={{
              margin: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ color: '#249fed' }}>联系客服</Text>
            <Text style={{ color: '#249fed' }}>忘记密码</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f1f2f3',
    borderStyle: 'solid',
    marginLeft: 30,
    marginRight: 30
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
    flex: 1
  },
  btn: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    borderWidth: 0.5,
    borderRadius: 3,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
