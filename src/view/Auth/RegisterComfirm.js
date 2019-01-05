import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'
import { StackActions, NavigationActions, SafeAreaView } from 'react-navigation'

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
      name: '',
      idCard: ''
    }
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
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>登录密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请输入登录密码"
            onChangeText={text => this.setState({ idCard: text })}
            value={this.state.idCard}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>确认密码</Text>
          <TextInput
            style={styles.input}
            placeholder="请确认您的登录密码"
            onChangeText={text => this.setState({ idCard: text })}
            value={this.state.idCard}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableHighlight
          onPress={() => {
            this.props.navigation.dispatch(resetAction)
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
  }
})
