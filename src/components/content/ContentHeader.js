import React, {Component} from 'react'

class ContentHeader extends Component {
  render(){
    return(<div>
      <h1>{this.props.pageName}</h1>
      <p>{this.props.greeting}</p>
    </div>)
  }
}

export default ContentHeader;
