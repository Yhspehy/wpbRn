import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native'

export default class Verify extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.info}>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>累计用尽</Text>
              <Text style={styles.infoText}>0</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Verify')}
                style={{
                  backgroundColor: '#d42b2e',
                  paddingTop: 4,
                  paddingLeft: 12,
                  paddingBottom: 4,
                  paddingRight: 12,
                  borderRadius: 2
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12
                  }}
                >
                  提现
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>佣金比例</Text>
              <Text style={styles.infoText}>5%</Text>
              <Text>新手经纪人</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>我的用户</Text>
              <Text style={styles.infoText}>0</Text>
              <Text>交易0人</Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 20
            }}
          >
            <Text style={styles.text}>复制推广链接发给朋友</Text>
            <Text style={{ color: '#d42b2e', marginTop: 10 }}>
              http://www.waipan8.com/agent/551{' '}
              <Text style={{ marginLeft: 30, color: '#249fed' }}>复制</Text>
            </Text>
            <Text style={styles.text}>推荐朋友扫码，成为你的用户</Text>
            <Image
              style={{
                marginTop: 20,
                width: Dimensions.get('window').width * 0.45,
                height: Dimensions.get('window').width * 0.45
              }}
              source={{
                url:
                  'http://api.waipan8.com/qrcode/getcode?url=http://www.waipan8.com/agent/551'
              }}
            />
          </View>

          <Image
            source={require('../img/spread.jpg')}
            resizeMode="contain"
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').width * 1.1
            }}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f3',
    flex: 1
  },
  text: {
    color: '#212121',
    marginTop: 10
  },
  info: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  infoRow: {
    flex: 1,
    alignItems: 'center'
  },
  infoText: {
    color: '#7a7a7a',
    marginBottom: 10
  }
})
