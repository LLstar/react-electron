import React from 'react'
import './singer.less'
import { ARTIST_LIST } from '../../axios/Api'

class Singer extends React.Component {
  constructor() {
    super();
    this.state = { singers: [] }
  }

  async componentDidMount() {
    const result = await ARTIST_LIST('1001')
    console.log('====================================');
    console.log('歌手列表：', result);
    console.log('====================================');
    this.setState({singers: result.artists})
  }

  singerList = () => {
    return this.state.singers.map(item => {
      return (
        <li key={item.id}>
          <div className="singer-img-container">
            <img src={item.img1v1Url} alt="" />
            <p className="singer-name">{item.name}</p>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className="singer-list">
          <li className="singer-list-item">
            <span className="singer-list-item-title">语种</span>
            <span className="singer-list-item-name active">华语</span>
            <span className="singer-list-item-name">欧美</span>
            <span className="singer-list-item-name">日本</span>
            <span className="singer-list-item-name">韩国</span>
            <span className="singer-list-item-name">其他</span>
          </li>
          <li className="singer-list-item">
            <span className="singer-list-item-title">类别</span>
            <span className="singer-list-item-name active">男歌手</span>
            <span className="singer-list-item-name">女歌手</span>
            <span className="singer-list-item-name">组合/乐队</span>
          </li>
        </ul>
        <ul className="list-flex">
          {this.singerList()}
        </ul>
      </div>
    )
  }
}

export default Singer
