import React, {Component} from 'react'

class SideBar extends Component {
  render() {
    return(
      <div style={sideStyle}>side</div>
    )
  }
}

const sideStyle = {
  width: 200,
  height: '100vh',
}

export default SideBar
