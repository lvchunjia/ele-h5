import axios from 'axios'

const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (res) => {
    const { data: _data } = res
    const { code, data, msg } = _data

    if (code !== 0) {
      showDialog({ message: msg }).then(() => {})
      return Promise.reject(msg)
    }

    return data
  },
  (err) => {
    showDialog({ message: err.message }).then(() => {})
    return Promise.reject(err)
  }
)

export default instance
