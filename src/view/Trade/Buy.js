import React from 'react'

import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'

import RNPickerSelect from 'react-native-picker-select'

import BuyFooter from './components/BuyFooter'
import Echarts from 'native-echarts'

import Chart from './components/Chart'

export default class Buy extends React.Component {
  state = {
    favStock: '美黄金',
    items: [
      {
        label: '美原油',
        value: '美原油'
      },
      {
        label: '大恒指',
        value: '大恒指'
      },
      {
        label: '小恒指',
        value: '小恒指'
      },
      {
        label: '美黄金',
        value: '美黄金'
      },
      {
        label: '富时A50',
        value: '富时A50'
      },
      {
        label: '德指DAX',
        value: '德指DAX'
      }
    ],
    favLineType: 'hour',
    favDayLine: 'day',
    dayLine: [
      {
        label: '日线',
        value: 'day'
      },
      {
        label: '1分钟',
        value: '1'
      },
      {
        label: '10分钟',
        value: '10'
      },
      {
        label: '15分钟',
        value: '15'
      }
    ]
  }

  _renderDayItem = (value, text) => (
    <Text
      onPress={() => this.setState({ favLineType: value })}
      style={[
        styles.lineText,
        {
          color: this.state.favLineType === value ? '#2994e6' : '#212121'
        }
      ]}
    >
      {text}
    </Text>
  )

  render() {
    const option = {
      title: {
        text: 'ECharts demo'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {
        show: false
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <RNPickerSelect
            items={this.state.items}
            onValueChange={value => {
              this.setState({
                favStock: value
              })
            }}
            hideIcon={true}
            style={{ ...pickerSelectStyles }}
            value={this.state.favStock}
          />

          <View style={{ flexDirection: 'row', padding: 10 }}>
            {this._renderDayItem('hour', '分时')}
            <RNPickerSelect
              items={this.state.dayLine}
              onValueChange={value => {
                this.setState({
                  favLineType: 'day',
                  favDayLine: value
                })
              }}
              hideIcon={true}
              style={{
                inputIOS: {
                  fontSize: 14,
                  color:
                    this.state.favLineType === 'day' ? '#2994e6' : '#212121',
                  width: 50
                },
                inputAndroid: {
                  fontSize: 14,
                  color:
                    this.state.favLineType === 'day' ? '#2994e6' : '#212121',
                  width: 50
                }
              }}
              value={this.state.favDayLine}
            />
            {this._renderDayItem('lightning', '闪电')}
            {this._renderDayItem('handicap', '盘口')}
          </View>

          <Echarts option={option} height={300} />

          <Chart />

          <BuyFooter data={10} />
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
  lineText: {
    fontSize: 14,
    color: '#212121',
    width: 50
  }
})

const pickerSelectStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 15,
    paddingBottom: 12,
    backgroundColor: '#e34c4c',
    color: '#ffffff'
  },
  // eslint-disable-next-line react-native/no-unused-styles
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 15,
    paddingBottom: 12,
    backgroundColor: '#e34c4c',
    color: '#ffffff'
  }
})
