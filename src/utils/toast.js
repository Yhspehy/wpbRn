import React from 'react'
import { StyleSheet, View, Animated, Dimensions, Text } from 'react-native'

import PropTypes from 'prop-types'

const { height } = Dimensions.get('window')

export default class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity)
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  show(textWord, delayTime = 500, callback) {
    this.setState({
      isShow: true,
      text: textWord
    })

    Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration
    }).start(() => {
      this.isShow = true
      if (delayTime > 0) this.close(delayTime, callback)
    })
  }

  close(delayTime, callback) {
    const delay = delayTime ? delayTime : 250

    if (!this.isShow && !this.state.isShow) return
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration
      }).start(() => {
        this.setState({
          isShow: false
        })
        this.isShow = false
        if (typeof callback === 'function') {
          callback()
        }
      })
    }, delay)
  }

  render() {
    let pos
    switch (this.props.position) {
      case 'top':
        pos = this.props.positionValue
        break
      case 'center':
        pos = height / 2
        break
      case 'bottom':
        pos = height - this.props.positionValue
        break
    }

    const view = this.state.isShow ? (
      <View style={[styles.container, { top: pos }]} pointerEvents="none">
        <Animated.View
          style={[
            styles.content,
            { opacity: this.state.opacityValue },
            this.props.style
          ]}
        >
          {React.isValidElement(this.state.text) ? (
            this.state.text
          ) : (
            <Text style={this.props.textStyle}>{this.state.text}</Text>
          )}
        </Animated.View>
      </View>
    ) : null
    return view
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 999,
    alignItems: 'center',
    zIndex: 10000
  },
  content: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10
  },
  text: {
    color: 'white'
  }
})

Toast.propTypes = {
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  textStyle: Text.propTypes.style,
  positionValue: PropTypes.number,
  fadeInDuration: PropTypes.number,
  fadeOutDuration: PropTypes.number,
  opacity: PropTypes.number
}

Toast.defaultProps = {
  position: 'top',
  textStyle: styles.text,
  positionValue: 120,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  opacity: 1
}
