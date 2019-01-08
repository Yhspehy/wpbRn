/* eslint-disable no-undef */
import { AsyncStorage } from 'react-native'

import Fetch, { baseUrl } from './fetch'

/**
 * 登录
 * @param {body}
 */
export function login(data) {
  return Fetch('/InfoUser/Login', {
    method: 'POST',
    body: data
  })
}

/**
 * 保存Token
 */

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    // console.log(error)
  }
}

/**
 * 获取用户信息
 */

export async function getUser() {
  return Fetch('/InfoUser/GetSelf').then(async json => {
    await AsyncStorage.setItem('user', JSON.stringify(json.data))
    return json
  })
}

/**
 * 获取图形验证码
 */
export function getImgCode() {
  return Fetch('/ValidationImage/GetSign')
}

/**
 * 验证图形验证码
 */
export function checkImgCode(data) {
  return Fetch('/InfoMobileMsg/SendMessage', {
    method: 'POST',
    body: data
  })
}

/**
 * 注册
 */
export function register(data) {
  return Fetch('/InfoUser/Register', {
    method: 'POST',
    body: data
  })
}
