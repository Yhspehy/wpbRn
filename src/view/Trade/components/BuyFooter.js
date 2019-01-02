import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Row = memo(({ data }) => (
  <View
    style={{
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      backgroundColor: '#fff'
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#f1f2f3',
        borderStyle: 'solid',
        paddingBottom: 6
      }}
    >
      <Text style={{ color: '#adadad' }}>
        可交易<Text style={{ color: '#e34c4c', fontSize: 12 }}>{data}次</Text>
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: '#adadad', fontSize: 12 }}>账户余额{data}</Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderColor: '#e34c4c',
            borderWidth: 0.5,
            borderStyle: 'solid',
            marginLeft: 10
          }}
          onPress={() => this.props.navigation.navigate('Verify')}
        >
          <Text
            style={{
              color: '#e34c4c',
              fontSize: 12
            }}
          >
            充值
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
      }}
    >
      <Text style={{ color: '#212121' }}>
        {data}十档买卖量{data}
      </Text>
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e34c4c',
          flex: 1,
          padding: 10,
          margin: 10,
          borderRadius: 4
        }}
        onPress={() => this.props.navigation.navigate('Verify')}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16
          }}
        >
          看多
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00b38f',
          flex: 1,
          padding: 10,
          margin: 10,
          borderRadius: 4
        }}
        onPress={() => this.props.navigation.navigate('Verify')}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16
          }}
        >
          看空
        </Text>
      </TouchableOpacity>
    </View>
  </View>
))

export default Row
