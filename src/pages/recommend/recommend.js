import React from 'react'
import Banner from '../../components/banner/banner'

class Recommend extends React.Component {
  render() {
    return (
      <div style={styles.recommend}>
        <Banner style={styles.banner}></Banner>
      </div>
    )
  }
}

const styles = {
  recommend: {
    padding: '50px'
  },
  banner: {
    width: '100vw',
    height: '150px'
  }
}

export default Recommend
