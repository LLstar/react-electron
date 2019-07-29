import SSHttp from './SSHttp'

// 获取轮播图
const BANNER = async () => {
  const result = await SSHttp.get('banner', { type: 0})
  return result
}

// 获取推荐歌单列表
const PERSONALIZED = async () => {
  const result = await SSHttp.get('personalized')
  return result
}

export {
  BANNER,
  PERSONALIZED
}
