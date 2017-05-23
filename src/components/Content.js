import React, {Component} from 'react'

import ContentHeader from './content/ContentHeader'

class Content extends Component {
  render(){
    return(<div>
      <ContentHeader pageName='Woof!' greeting='Woof! Woof woof!' />
      </div>)
  }
}

export default Content;
