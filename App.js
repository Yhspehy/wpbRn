import React from 'react' // eslint-disable-line no-unused-vars

import { createAppContainer } from 'react-navigation'

import Route from './src/config/route'

export default createAppContainer(Route)


// import React from 'react'
// import { Button, Text, View } from 'react-native'
// import {
//   createStackNavigator, createBottomTabNavigator, createAppContainer, SafeAreaView
// } from 'react-navigation'

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: '首页'
//   };

//   render() {
//     return (
//       <SafeAreaView>
//         <Text style={{ fontSize: 36 }}>some1222</Text>
//       </SafeAreaView>
//     )
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     )
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     )
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen
// })

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen
// })

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray'
//     }
//   },
// ))
