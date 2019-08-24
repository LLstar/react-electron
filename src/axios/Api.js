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

// 获取歌手列表
const ARTIST_LIST = async (cat) => {
  const result = await SSHttp.get('artist/list', { cat })
  return result
}

// 获取所有榜单内容摘要
const TOPLIST_DETAIL = async () => {
  const result = await SSHttp.get('toplist/detail')
  return result
}

// 获取所有榜单
const TOPLIST = async () => {
  const result = await SSHttp.get('toplist/artist')
  return result
}

// 获取电台-推荐
const DJ_RECOMMEND = async () => {
  const result = await SSHttp.get('dj/recommend')
  return result
}

// 获取电台-分类
const DJ_CATELIST = async () => {
  const result = await SSHttp.get('dj/catelist')
  return result
}

// 获取电台-分类推荐
const DJ_RECOMMEND_TYPE = async (type) => {
  const result = await SSHttp.get('dj/recommend/type', { type })
  return result
}

export {
  BANNER,
  PERSONALIZED,
  ARTIST_LIST,
  TOPLIST_DETAIL,
  TOPLIST,
  DJ_RECOMMEND,
  DJ_CATELIST,
  DJ_RECOMMEND_TYPE
}
