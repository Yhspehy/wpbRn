import React from 'react';

import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class ScreenSome1 extends React.Component {
  static navigationOptions = {
    title: 'some1',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 36 }}>some1</Text>
        </SafeAreaView>
    )
  }
}