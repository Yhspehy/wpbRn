/* eslint-disable no-undef */
import { AsyncStorage } from 'react-native'

import Fetch from './fetch'

export function login(data) {
  return Fetch('/InfoUser/Login', {
    method: 'POST',
    body: data
  })
}

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.log(error)
  }
}

export async function getUser() {
  return Fetch('/InfoUser/GetSelf').then(async json => {
    await AsyncStorage.setItem('user', JSON.stringify(json.data))
    return json
  })
}
