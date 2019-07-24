import React from 'react'
import './home.less'
import Head from '../../components/header/header'
import SideBar from '../../components/sideBar/sidebar'
import { Layout, BackTop } from 'antd';
import { Route, Redirect } from 'react-router-dom'
import SongList from '../songList/songList'
import Recommend from '../recommend/recommend'
import Radio from '../radio/radio'
import Singer from '../singer/singer'
import Leaderboard from '../leaderboard/leaderboard'

const { Header, Sider, Content } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="home">
        <Layout className="layout">
          <Sider className="side">
            <SideBar/>
          </Sider>
          <Layout>
            <Header className="head">
              <Head />
            </Header>
            <Content className="content">
              <Redirect path="/" to={{pathname: '/recommend'}} />
              <Route path='/songList' component = { SongList } />
              <Route path='/recommend' component = { Recommend } />
              <Route path='/radio' component= { Radio } />
              <Route path='/singer' component= { Singer } />
              <Route path='/leaderboard' component= { Leaderboard } />
            </Content>
          </Layout>
        </Layout>
        <BackTop>
          <div>TOP</div>
        </BackTop>
      </div>
    )
  }
}
