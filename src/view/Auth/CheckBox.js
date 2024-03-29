import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ViewPropTypes as RNViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

const ViewPropTypes = RNViewPropTypes || View.propTypes

export default class CheckBox extends React.Component {
  onClick() {
    this.props.onClick()
  }

  _renderLeft() {
    if (this.props.leftTextView) return this.props.leftTextView
    if (!this.props.leftText) return null
    return (
      <Text style={[styles.leftText, this.props.leftTextStyle]}>
        {this.props.leftText}
      </Text>
    )
  }

  _renderRight() {
    if (this.props.rightTextView) return this.props.rightTextView
    if (!this.props.rightText) return null
    return (
      <Text style={[styles.rightText, this.props.rightTextStyle]}>
        {this.props.rightText}
      </Text>
    )
  }

  _renderImage() {
    if (this.props.isIndeterminate) {
      return this.props.indeterminateImage
        ? this.props.indeterminateImage
        : this.genCheckedImage()
    }
    if (this.props.isChecked) {
      return this.props.checkedImage
        ? this.props.checkedImage
        : this.genCheckedImage()
    } else {
      return this.props.unCheckedImage
        ? this.props.unCheckedImage
        : this.genCheckedImage()
    }
  }

  _getCheckedCheckBoxColor() {
    return this.props.checkedCheckBoxColor
      ? this.props.checkedCheckBoxColor
      : this.props.checkBoxColor
  }

  _getUncheckedCheckBoxColor() {
    return this.props.uncheckedCheckBoxColor
      ? this.props.uncheckedCheckBoxColor
      : this.props.checkBoxColor
  }

  _getTintColor() {
    return this.props.isChecked
      ? this._getCheckedCheckBoxColor()
      : this._getUncheckedCheckBoxColor()
  }

  genCheckedImage() {
    let source
    if (this.props.isIndeterminate) {
      source = require('./img/uncheck.png')
    } else {
      source = this.props.isChecked
        ? require('./img/check.png')
        : require('./img/nocheck.png')
    }

    return (
      <Image
        source={source}
        style={{
          tintColor: this._getTintColor(),
          width: this.props.imgWidth,
          height: this.props.imgHeight
        }}
      />
    )
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.style}
        onPress={() => this.onClick()}
        underlayColor="transparent"
        disabled={this.props.disabled}
      >
        <View style={styles.container}>
          {this._renderLeft()}
          {this._renderImage()}
          {this._renderRight()}
        </View>
      </TouchableHighlight>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftText: {
    flex: 1
  },
  rightText: {
    flex: 1,
    marginLeft: 10
  }
})

CheckBox.propTypes = {
  ...ViewPropTypes,
  leftText: PropTypes.string,
  leftTextView: PropTypes.element,
  rightText: PropTypes.string,
  leftTextStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  rightTextView: PropTypes.element,
  rightTextStyle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  checkedImage: PropTypes.element,
  unCheckedImage: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isIndeterminate: PropTypes.bool.isRequired,
  checkBoxColor: PropTypes.string,
  checkedCheckBoxColor: PropTypes.string,
  uncheckedCheckBoxColor: PropTypes.string,
  disabled: PropTypes.bool,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number
}

CheckBox.defaultProps = {
  isChecked: false,
  isIndeterminate: false,
  leftTextStyle: {},
  rightTextStyle: {},
  imgWidth: 20,
  imgHeight: 20
}
