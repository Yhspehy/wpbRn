import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

export default class HomeScreen extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getCommodity()
  }

  componentWillUnmount() {
    clearInterval(this.counter)
  }

  getCommodity = () => {
    // eslint-disable-next-line no-undef
    fetch('http://api.ghyy8.com/InfoCommodity/GetList')
      .then(response => response.json())
      .then(res => {
        this.refreshPrice(res.data)
        this.counter = setInterval(
          () => this.refreshPrice(this.state.data),
          2000
        )
      })
  }

  refreshPrice = list => {
    // eslint-disable-next-line no-undef
    fetch('http://api.ghyy8.com/InfoCommodity/GetAllPrice')
      .then(response => response.json())
      .then(result => {
        const Data = list.map(e => {
          const el = result.data.find(value => value.commodity_id === e.id)
          if (el) {
            e.last_price = el.last_price
            e.change_rate = el.change_rate
            e.color = el.color
            e.bg_color = el.bg_color
            if (e.change_rate > 0) e.change_rate = '+' + e.change_rate
          }

          return e
        })
        this.setState({
          data: Data
        })
      })
  }

  _renderItem = item => (
    <View
      key={item.title}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: Dimensions.get('window').width * 0.25
      }}
    >
      <Image
        source={{ url: item.icon_url }}
        resizeMode="contain"
        style={{
          width: Dimensions.get('window').width * 0.2,
          height: Dimensions.get('window').width * 0.2
        }}
      />
      <Text
        style={{
          color: '#212121',
          fontSize: 15,
          marginTop: 5
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          color: item.change_rate > 0 ? '#e34c4c' : '#00b38f',
          fontSize: 12,
          marginTop: 4
        }}
      >
        <Text style={{ marginRight: 10 }}>{item.last_price} </Text>
        <Text>{item.change_rate && item.change_rate + '%'}</Text>
      </Text>
    </View>
  )

  render() {
    return (
      <View style={styles.itemContainer}>
        {this.state.data.map(item => this._renderItem(item))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    marginTop: -40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    shadowColor: '#000',
    shadowOffset: {
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2
  }
})
