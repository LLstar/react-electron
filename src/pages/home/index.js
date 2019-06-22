import React from 'react'
import './home.less'
import Head from '../../components/header/header'
import SideBar from '../../components/sideBar/sidebar'
import { Layout } from 'antd';
import { Route, Redirect } from 'react-router-dom'
import About from '../about/about'
import Recommend from '../recommend/recommend'
import Collection from '../collection/collection'
import Search from '../search/search'
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
              <Route path='/about' component = { About } />
              <Route path='/recommend' component = { Recommend } />
              <Route path='/collection' component= { Collection } />
              <Route path='/search' component= { Search } />
              <Route path='/leaderboard' component= { Leaderboard } />
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
