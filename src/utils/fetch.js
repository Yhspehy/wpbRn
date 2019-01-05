import { AsyncStorage } from 'react-native'

export default async function Fetch(url, options, fullUrl) {
  const token = (await AsyncStorage.getItem('token')) || ''
  // const baseUrl = 'http://api.waipan8.com'
  const finalUrl = fullUrl ? fullUrl : baseUrl + url
  const defaultOptioins = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  // eslint-disable-next-line no-undef
  return fetch(finalUrl, {
    ...defaultOptioins,
    ...options
  }).then(response => {
    return response.json()
  })
}

export var baseUrl = 'http://api.waipan8.com'
