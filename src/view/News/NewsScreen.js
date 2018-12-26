import React from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '新闻资讯',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#d42b2e'
    },
    headerTintColor: '#fff'
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

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate('NewsDetail', { id: item.id })
      }
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={{ color: '#212121', fontSize: 14 }}>{item.title}</Text>
        <Text style={{ color: '#adadad', fontSize: 11 }}>
          {item.created_at}
        </Text>
      </View>
      <Image
        source={{ url: item.thumb }}
        style={{
          width: Dimensions.get('window').width * 0.2,
          height: Dimensions.get('window').width * 0.16
        }}
      />
    </TouchableOpacity>
  )

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id + ''}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f3',
    borderStyle: 'solid'
  }
})
