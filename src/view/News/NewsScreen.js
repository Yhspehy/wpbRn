import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import NewItem from './NewItem'
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

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <NewItem item={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => item.id + ''}
        />
      </SafeAreaView>
    )
  }
}
