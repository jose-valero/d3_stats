import { post } from 'axios'

const clientId = '03d57f4120fc426883fc92c13b452089'
const clientSecret = 'PxhnJu6V1jfhUT11rw8M04PaXX2jUymc'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }
  return post(API_URL, body, config)
}

export { getToken }
