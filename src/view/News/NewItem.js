import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions
} from 'react-native'

export default class HomeScreen extends React.Component {
  goDetail = ID => {
    this.props.navigation.push('NewsDetail', {
      id: ID,
      back: this.props.navigation.state.routeName
    })
  }

  render() {
    const { item } = this.props
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.goDetail(item.id)}
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
