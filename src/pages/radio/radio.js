import React from 'react'
import { DJ_RECOMMEND, DJ_CATELIST, DJ_RECOMMEND_TYPE } from '../../axios/Api'
import './radio.less'

class Radio extends React.Component {
  constructor() {
    super()
    this.state = { list: [], radioCateList: [] }
  }

  async componentDidMount() {
    const result = await DJ_RECOMMEND()
    const data = await DJ_CATELIST()
    this.setState({ list: result.djRadios, radioCateList: data.categories })
  }

  playCount = (count) => {
    if(count/10000 < 1) {
      return count
    }
    return parseInt(count/10000, 10) + '万'
  }

  radioList = () => {
    return this.state.list.map(item => {
      return (
        <li key={item.id}>
          <div className="radio-list-item">
            <img src={item.picUrl} alt="" />
            <span className="radio-list-item-count">
              <i className="iconfont icon-erji" />
              <i>{this.playCount(item.subCount)}</i>
            </span>
            <span className="iconfont icon-bofang"></span>
          </div>
          <p className="radio-list-name">{ item.name }</p>
        </li>
      )
    })
  }

  cateList = () => {
    return this.state.radioCateList.map(item => {
      return (
        <span className="cate-item" onClick={this.changeCate.bind(this, item)} key={item.id}>{item.name}</span>
      )
    })
  }

  // 切换分类
  async changeCate(item) {
    const result = await DJ_RECOMMEND_TYPE(item.id)
    this.setState({ list: result.djRadios })
  }

  render() {
    return (
      <div>
        <div className="cate-list">
          {this.cateList()}
        </div>
        <ul className="radio-list">
          {this.radioList()}
        </ul>
      </div>
    )
  }
}

export default Radio
