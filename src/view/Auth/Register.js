import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import MsgCodeModal from './MsgCodeModal'
export default class Register extends React.Component {
  static navigationOptions = {
    title: '免费注册',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props)
    this.state = {
      mobile: '',
      msgCode: '',
      modalVisible: false,
      btnDisabled: false,
      msgCodeText: '获取验证码',
      msgCodeSecond: 10
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeMsgCode)
  }

  setModalVisible(visible, btnDisabled) {
    if (!this.state.btnDisabled) {
      if (!btnDisabled) {
        this.setState({ modalVisible: visible })
      } else {
        this.setState({
          modalVisible: visible,
          btnDisabled: true
        })
        this.tick()
      }
    }
  }

  tick = () => {
    this.setState({
      msgCodeText: `${this.state.msgCodeSecond}s后重新发送`
    })
    this.timeMsgCode = setInterval(() => {
      if (this.state.msgCodeSecond === 1) {
        clearInterval(this.timeMsgCode)
        this.setState({
          msgCodeSecond: 10,
          msgCodeText: '获取验证码',
          btnDisabled: false
        })
        return false
      }
      this.setState((prevState, props) => ({
        msgCodeSecond: prevState.msgCodeSecond - 1,
        msgCodeText: `${prevState.msgCodeSecond - 1}s后重新发送`
      }))
    }, 1000)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.leftText}>手机号码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入手机号码"
            onChangeText={text => this.setState({ mobile: text })}
            value={this.state.mobile}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>短信验证码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入验证码"
            onChangeText={text => this.setState({ msgCode: text })}
            value={this.state.msgCode}
            textContentType="oneTimeCode"
            underlineColorAndroid="transparent"
          />

          <TouchableWithoutFeedback
            onPress={() => {
              this.setModalVisible(true)
            }}
            disabled={this.state.btnDisabled}
          >
            <Text
              style={[
                styles.btn,
                {
                  color: this.state.btnDisabled ? '#fff' : '#d42b2e',
                  fontSize: 12,
                  height: 30,
                  lineHeight: 28,
                  backgroundColor: this.state.btnDisabled ? '#b6b6b6' : '#fff',
                  borderColor: this.state.btnDisabled
                    ? 'transparent'
                    : '#d42b2e',
                  paddingLeft: 10,
                  paddingRight: 10
                }
              ]}
            >
              {this.state.msgCodeText}
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('RegisterComfirm')
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
            下一步
          </Text>
        </TouchableHighlight>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#7a7a7a' }}>
            如收不到验证码，请<Text style={{ color: '#249fed' }}>联系客服</Text>
          </Text>
        </View>

        {/* MsgCodeModal */}
        <MsgCodeModal
          modalVisible={this.state.modalVisible}
          setModalVisible={(visible, btnDisabled) =>
            this.setModalVisible(visible, btnDisabled)
          }
        />
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
    padding: 10,
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
  }
})
