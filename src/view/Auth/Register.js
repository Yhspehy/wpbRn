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

export default class Verify extends React.Component {
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
      name: '',
      idCard: ''
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.leftText}>手机号码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入手机号码"
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>短信验证码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入验证码"
            onChangeText={text => this.setState({ idCard: text })}
            value={this.state.idCard}
            underlineColorAndroid="transparent"
          />

          <TouchableHighlight
            onPress={() => {
              Alert.alert('你点击了验证码！')
            }}
            style={[
              styles.btn,
              {
                height: 30,
                backgroundColor: '#fff',
                borderColor: '#d42b2e',
                paddingLeft: 20,
                paddingRight: 20
              }
            ]}
          >
            <Text style={{ color: '#d42b2e', fontSize: 12, fontWeight: '500' }}>
              获取验证码
            </Text>
          </TouchableHighlight>
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
