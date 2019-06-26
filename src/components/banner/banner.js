import React, {Component} from 'react'
import { Carousel } from 'antd'
import { BANNER } from '../../axios/Api'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = { banner: [] }
  }

  async componentDidMount() {
    const result = await BANNER()
    this.setState({ banner: result.banners })
  }

  render() {
    return (
      <div>
        <Carousel autoplay>
          {
            this.state.banner.map((item) => (
              <div key={item.targetId}>
                <img width="100%" src={item.imageUrl} alt="图片" />
              </div>
            ))
          }
        </Carousel>
      </div>
    )
  }
}

export default Banner
