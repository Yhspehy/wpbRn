import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class Verify extends React.Component {
  static navigationOptions = {
    header: null
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
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
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
              onChangeText={text => this.setState({ idCard: text })}
              value={this.state.idCard}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableHighlight
            onPress={() => {
              Alert.alert('你点击了登陆！')
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

          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={{ color: '#7a7a7a' }}>
              如遇到问题，请<Text style={{ color: '#249fed' }}>联系客服</Text>
            </Text>
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
    width: 140
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
