import axios from 'axios'
import authorization from  './authorization'

// @ts-ignore
const URL = 'https://bringstream.com/Engine/api/api.php'

export const axiosInstance = axios.create({
  baseURL: URL,
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // }
})

export const API = {
  authorization,
}
