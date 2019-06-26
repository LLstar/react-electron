import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd'
import './header.less'

class Head extends Component {
  state = {
    current: 'mail'
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span={8} className="headerTitle">
            LLstar Music
          </Col>
          <Col span={14}>
            <NavLink className="nav" to="/recommend">推荐</NavLink>
            <NavLink className="nav" to="/leaderboard">排行榜</NavLink>
            <NavLink className="nav" to="/search">搜索</NavLink>
            <NavLink className="nav" to="/collection">收藏</NavLink>
            <NavLink className="nav" to="/about">关于</NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
