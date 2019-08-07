import React from 'react'
import Banner from '../../components/banner/banner'
import { PERSONALIZED } from '../../axios/Api'
import './recommend.less'

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = { recommandList: [] }
    this.clickHandle = this.clickHandle.bind(this)
  }

  async componentDidMount() {
    const result = await PERSONALIZED()
    this.setState({ recommandList: result.result })
  }

  clickHandle() {
  }

  playCount = (count) => {
    return parseInt(count/10000, 10) + '万'
  }

  songList = () => {
    return this.state.recommandList.map(item => {
      return (
        <li key={item.id}>
          <div className="list-img-container">
            <div className="img-item">
              <span className="list-play-count">
                <i className="iconfont icon-erji" />
                <i>{this.playCount(item.playCount)}</i>
              </span>
              <i className="iconfont icon-bofang" onClick={this.clickHandle}></i>
              <img src={item.picUrl} alt="" />
            </div>
          </div>
          <p className="list-name">{item.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="recommend">
        <Banner className="banner"></Banner>
        <div>
          <h6 className="label">推荐歌单</h6>
          <ul className="recommend-list">
          {this.songList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Recommend
