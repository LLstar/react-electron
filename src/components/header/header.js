import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd'
import './header.less'

class Head extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span={8} className="headerTitle">
            LLstar Music
          </Col>
          <Col span={14}>
            <NavLink className="nav" to="/recommend">推荐</NavLink>
            <NavLink className="nav" to="/singer">歌手</NavLink>
            <NavLink className="nav" to="/leaderboard">排行</NavLink>
            <NavLink className="nav" to="/radio">电台</NavLink>
            <NavLink className="nav" to="/songList">歌单</NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
