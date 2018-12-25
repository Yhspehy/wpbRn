import React, { Fragment, memo } from 'react'
import Ionicons from 'react-native-vector-icons/AntDesign'
import { View, Text } from 'react-native'

const Row = memo(
  ({
    iconName,
    iconColor,
    fontSize,
    text,
    navigation,
    rightText,
    rightTextColor,
    disableIcon
  }) => (
    <Fragment>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          style={{ width: 25, marginRight: 10 }}
          name={iconName}
          size={25}
          color={iconColor}
        />
        <Text style={{ color: '#000', fontSize: fontSize || 20 }}>{text}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {rightText && (
          <Text style={{ color: rightTextColor || '#adadad' }}>
            {rightText}
          </Text>
        )}
        {!disableIcon && (
          <Ionicons
            style={{ width: 18, marginTop: 1 }}
            name="right"
            size={18}
            color="#adadad"
            onPress={() => navigation()}
          />
        )}
      </View>
    </Fragment>
  )
)

export default Row
