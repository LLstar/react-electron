import React from 'react'
import './home.less'
import Head from '../../components/header/header'
import SideBar from '../../components/sideBar/sidebar'
import { Layout } from 'antd';
import { Route, Redirect } from 'react-router-dom'
import SongList from '../songList/songList'
import Recommend from '../recommend/recommend'
import Radio from '../radio/radio'
import Singer from '../singer/singer'
import Leaderboard from '../leaderboard/leaderboard'
import FooterPlayer from '../../components/footerPlayer/footerPlayer'

const { Header, Sider, Content, Footer } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { height: window.innerHeight - 133 }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({height: window.innerHeight - 133})
    }
  }

  render() {
    return (
      <div className="home">
        <Layout className="layout">
          <Layout>
            <Sider className="side">
              <SideBar/>
            </Sider>
            <Content className="content">
              <Header className="head">
                <Head />
              </Header>
              <div className="contentDetail" style={{height: `${this.state.height}px`}}>
                <Redirect path="/" to={{pathname: '/recommend'}} />
                <Route path='/songList' component = { SongList } />
                <Route path='/recommend' component = { Recommend } />
                <Route path='/radio' component= { Radio } />
                <Route path='/singer' component= { Singer } />
                <Route path='/leaderboard' component= { Leaderboard } />
              </div>

            </Content>
          </Layout>
          <Footer>
            <FooterPlayer />
          </Footer>
        </Layout>
      </div>
    )
  }
}
