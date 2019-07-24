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
    padding: '20px 50px'
  },
  banner: {
    width: '80vw',
    height: '150px'
  }
}

export default Recommend
