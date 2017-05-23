import React, {Component} from 'react'

class ProfileDescription extends Component {
  render(){
    return(<div>
      <h1>{this.props.fullname}</h1>
      <p>{this.props.desc}</p>
    </div>)
  }
}

export default ProfileDescription
