import React from 'react'
// import Ionicons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Commodity from './Commodity'
import NewItem from '../News/NewItem'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    data: []
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch(
      'http://api.waipan8.com/Home/GetNewsList?page_index=1&page_size=10&login=false'
    )
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  _renderTitle = (title, subTitle) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomColor: '#f1f2f3',
        borderBottomWidth: 0.5,
        borderStyle: 'solid'
      }}
    >
      <Text style={{ fontSize: 15, color: '#333333', marginRight: 5 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 10, color: '#999999' }}>{subTitle}</Text>
    </View>
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={require('./img/banner.png')}
          resizeMode="contain"
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 0.562
          }}
        />

        <Commodity />

        <Text style={styles.risk}>期货风险提示</Text>

        <View style={styles.tutorial}>
          {this._renderTitle('新手教程', '百分百红包让你领')}

          <View style={styles.enjoy}>
            <View>
              <Text style={{ color: '#ff4c4c', fontSize: 20, marginBottom: 5 }}>
                10.00%<Text style={{ fontSize: 13 }}>+1.50%</Text>
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#999999', fontSize: 10 }}>
                  近3月年化收益率
                </Text>
                <View style={styles.exclusive}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#2994e6',
                      lineHeight: 14
                    }}
                  >
                    新人专享
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('Verify')}
            >
              <LinearGradient
                useAngle={true}
                angle={20}
                colors={['#6876ff', '#22b6ff']}
                style={styles.linearGradient}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12
                  }}
                >
                  立即享受
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tutorial}>
          {this._renderTitle('热门咨询', '提供最新热门新闻')}

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <NewItem item={item} navigation={this.props.navigation} />
            )}
            keyExtractor={item => item.id + ''}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6'
  },
  risk: {
    fontSize: 12,
    color: '#ff4c4c',
    textAlign: 'center',
    margin: 12,
    textDecorationLine: 'underline'
  },
  tutorial: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5
  },
  enjoy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10
  },
  exclusive: {
    borderWidth: 0.5,
    borderColor: '#2994e6',
    borderStyle: 'solid',
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 2,
    marginLeft: 4
  },
  linearGradient: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingBottom: 8,
    paddingRight: 20,
    borderRadius: 15,
    justifyContent: 'center'
  }
})
