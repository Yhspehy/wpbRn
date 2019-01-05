import React from 'react'
import {
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native'

import { getImgCode, checkImgCode } from '../../utils/user'
import { baseUrl } from '../../utils/fetch'

export default class MsgCodeModal extends React.Component {
  state = {
    sign: '',
    imgCode: '',
    inputImgCode: '',
    warnMsg: ''
  }

  componentDidMount() {
    this._getImgCode()
  }

  _getImgCode = () => {
    getImgCode().then(res => {
      this.setState({
        sign: res.data,
        imgCode: baseUrl + '/ValidationImage/GetAloImage?sign=' + res.data
      })
    })
  }

  _checkImgCode = () => {
    if (!this.state.inputImgCode) {
      this.setState({
        warnMsg: '请输入图形验证码'
      })
      return false
    }
    const data = JSON.stringify({
      mobile: 12121212111,
      sign: this.state.imgCode,
      img_code: this.state.inputImgCode,
      type: 1
    })
    checkImgCode(data).then(res => {
      if (!res.success) {
        this.setState({
          warnMsg: res.msg
        })
        return false
      }
      this.props.setModalVisible(false, true)
    })
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {}}
      >
        {/* 遮罩 */}
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* 背景 */}
          <View
            style={{
              backgroundColor: '#fff',
              width: Dimensions.get('window').width * 0.64,
              paddingTop: 20,
              borderRadius: 8
            }}
          >
            <Text
              style={{
                textAlign: 'center'
              }}
            >
              请填写图形验证码
            </Text>

            <View
              style={{
                flexDirection: 'row',
                padding: 20
              }}
            >
              <Image
                source={{
                  url: this.state.imgCode
                }}
                style={{
                  width: 80,
                  height: 29,
                  marginRight: 20
                }}
              />
              <TextInput
                style={{
                  flex: 1,
                  borderColor: '#f1f2f3',
                  borderWidth: 1
                }}
                placeholder="请输入"
                value={this.state.inputImgCode}
                onChangeText={text => this.setState({ inputImgCode: text })}
              />
            </View>

            {this.state.warnMsg !== '' && (
              <Text style={{ color: 'red', marginLeft: 30 }}>
                {this.state.warnMsg}
              </Text>
            )}

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10
              }}
            >
              <TouchableHighlight
                style={[
                  styles.btn,
                  {
                    borderRightWidth: 1
                  }
                ]}
                onPress={() => {
                  this.props.setModalVisible(false, true)
                }}
              >
                <Text style={styles.btnText}>取消</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.btn}
                onPress={() => {
                  this._checkImgCode()
                }}
              >
                <Text style={styles.btnText}>确定</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderColor: '#f1f2f3',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  btnText: {
    color: '#249fed',
    fontSize: 15
  }
})
