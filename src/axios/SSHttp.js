import BaseHttp from './BaseHttp'

class SSHttp extends BaseHttp {
  constructor() {
    super('')
  }

  // get方法
  async get(url, params, config = {}) {
    const resData = await this.instance.get(url, {
      params,
      ...config
    })
    return resData
  }

  // post方法
  async post(url, data, config = {}) {
    const resData = await this.instance.post(url, data, {
      ...config
    })
    return resData
  }

  // put
  async put(url, data, config = {}) {
    const resData = await this.instance.put(url, data, {
      ...config
    })
    return resData
  }

  // upload 方法
  async upload(url, data, config = {}) {
    const resData = await this.instance.post(url, data, {
      ...config
    })
    return resData
  }

  // delete 方法
  async delete(url, params, config = {}) {
    const resData = await this.instance.delete(url, {
      params,
      ...config
    })
    return resData
  }
}

export default new SSHttp()
