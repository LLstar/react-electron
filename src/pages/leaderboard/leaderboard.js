import React from 'react'
import { TOPLIST_DETAIL, TOPLIST } from '../../axios/Api'

class Leaderboard extends React.Component {
  async componentDidMount() {
    const result = await TOPLIST_DETAIL()
    console.log('====================================');
    console.log('获取所有的榜单内容：', result);
    console.log('====================================');
  }

  render() {
    return (
      <div>
        <h2>排行榜</h2>
      </div>
    )
  }
}

export default Leaderboard
