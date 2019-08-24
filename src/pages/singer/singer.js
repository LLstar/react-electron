import React from 'react'
import './singer.less'
import { ARTIST_LIST } from '../../axios/Api'

class Singer extends React.Component {
  constructor() {
    super();
    this.state = { singers: [], laguange: '10', singerCate: '01' }
  }

  async componentDidMount() {
    const params = `${this.state.laguange}${this.state.singerCate}`
    const result = await ARTIST_LIST(params)
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

  async changeLaguange(item) {
    this.setState({ laguange: item })
    const params = `${item}${this.state.singerCate}`
    const result = await ARTIST_LIST(params)
    this.setState({singers: result.artists})
  }
  async changeCate(item) {
    this.setState({ singerCate: item })
    const params = `${this.state.laguange}${item}`
    const result = await ARTIST_LIST(params)
    this.setState({singers: result.artists})
  }

  render() {
    return (
      <div>
        <ul className="singer-list">
          <li className="singer-list-item">
            <span className="singer-list-item-title">语种</span>
            <span className={this.state.laguange === '10' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeLaguange.bind(this, '10')}>华语</span>
            <span className={this.state.laguange === '20' ? 'singer-list-item-name active' : 'singer-list-item-name'}  onClick={this.changeLaguange.bind(this, '20')}>欧美</span>
            <span className={this.state.laguange === '60' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeLaguange.bind(this, '60')}>日本</span>
            <span className={this.state.laguange === '70' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeLaguange.bind(this, '70')}>韩国</span>
            <span className={this.state.laguange === '40' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeLaguange.bind(this, '40')}>其他</span>
          </li>
          <li className="singer-list-item">
            <span className="singer-list-item-title">类别</span>
            <span className={this.state.singerCate === '01' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeCate.bind(this, '01')}>男歌手</span>
            <span className={this.state.singerCate === '02' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeCate.bind(this, '02')}>女歌手</span>
            <span className={this.state.singerCate === '03' ? 'singer-list-item-name active' : 'singer-list-item-name'} onClick={this.changeCate.bind(this, '03')}>组合/乐队</span>
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
