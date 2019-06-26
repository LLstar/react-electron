import SSHttp from './SSHttp'

// 获取轮播图
const BANNER = async (params) => {
  const result = await SSHttp.get('banner', { type: 0, ...params })
  return result
}

export {
  BANNER
}
