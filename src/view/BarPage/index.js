import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ScreenTab1 from '../ScreenTab1';
// import ScreenTab2 from '../ScreenTab2';
// import ScreenTab3 from '../ScreenTab3';

const TabNavigator = createBottomTabNavigator(
  {
    ScreenTab1: ScreenTab1
    // ScreenTab2: {
    //   screen: ScreenTab2,
    // },
    // ScreenTab3: {
    //   screen: ScreenTab3,
    // },
  }
);

export default TabNavigator;