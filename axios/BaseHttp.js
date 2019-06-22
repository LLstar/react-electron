import axios from 'axios'
import qs from 'qs'

const filterParam = obj => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      filterParam(obj[key]) // 递归遍历
    }

    if (obj[key] === null || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj
}

class BaseHttp {
  constructor(baseURL, baseConfig) {
    // 创建实例

    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      ...baseConfig,
      withCredentials: true
    })

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      config => {
        const BaseUrl = 'http://192.168.2.163:3000/'
        config.baseURL = BaseUrl
        filterParam(config.params)
        if (config.method === 'get') {
          config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' })
        }
        console.log('请求配置：', config)
        return config
      },
      error => {
        BaseHttp.errorHandler(error)
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      response => {
        if (response.status !== 200) {
          BaseHttp.errorHandler({ response })
          const error = { response }
          return Promise.reject(error)
        }
        const result = response.data
        console.log('请求成功:', result)
        return result
      },
      error => {
        BaseHttp.errorHandler(error)
        return Promise.reject(error)
      }
    )
  }

  static errorHandler = error => {
    if (error.response) {
      const { status, data } = error.response
      if (status === 400 && data.code === 1) {
        if(data.message) {
          alert(data.message)
        } else {
          alert(error.response.status + error.response.statusText)
        }
      }
    } else {
      alert('请求超时')
    }
  }
}

export default BaseHttp
