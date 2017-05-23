import React, {Component} from 'react'

class ProfileImage extends Component {
  render(){
    return(<img width="250" src={this.props.src} alt={this.props.alt} />)
  }
}

export default ProfileImage;
