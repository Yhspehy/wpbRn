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
        {rightText && <Text>{rightText}</Text>}
        {!disableIcon && (
          <Ionicons
            style={{ width: 20, marginTop: 2 }}
            name="right"
            size={20}
            color="#adadad"
            onPress={() => navigation()}
          />
        )}
      </View>
    </Fragment>
  )
)

export default Row
