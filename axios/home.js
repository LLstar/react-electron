import SSHttp from './SSHttp'

// 获取轮播图
const Banner = async (params) => {
  const result = await SSHttp.get('banner', { type: 0, ...params })
  return result
}

export default {
  Banner
}
