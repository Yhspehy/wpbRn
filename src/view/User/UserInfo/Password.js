import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class Password extends React.Component {
  static navigationOptions = {
    title: '修改密码',
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
      newPwd: '',
      comfirmPwd: ''
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.leftText}>手机号码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入您的手机号码"
            onChangeText={text => this.setState({ mobile: text })}
            value={this.state.mobile}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>短信验证码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入短信验证码"
            onChangeText={text => this.setState({ msgCode: text })}
            value={this.state.msgCode}
            underlineColorAndroid="transparent"
          />
          <TouchableHighlight
            onPress={() => {
              Alert.alert('你点击了获取验证码！')
            }}
            style={[
              styles.btn,
              {
                width: 100,
                height: 30,
                backgroundColor: '#fff',
                borderColor: '#d42b2e'
              }
            ]}
          >
            <Text style={{ color: '#d42b2e', fontSize: 12 }}>获取验证码</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>新的密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入新密码"
            onChangeText={text => this.setState({ newPwd: text })}
            value={this.state.newPwd}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>确认密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请再次输入新密码"
            onChangeText={text => this.setState({ comfirmPwd: text })}
            value={this.state.comfirmPwd}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableHighlight
          onPress={() => {
            Alert.alert('你点击了修改！')
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
            立即修改
          </Text>
        </TouchableHighlight>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#7a7a7a' }}>
            如收不到验证码，请<Text style={{ color: '#249fed' }}>联系客服</Text>
          </Text>
        </View>
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
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderRadius: 3,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
