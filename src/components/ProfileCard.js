import React, {Component} from 'react'

import ProfileImage from './profile/ProfileImage'
import ProfileDescription from './profile/ProfileDescription'

class ProfileCard extends Component {
  render(){
    return(<div>
      <ProfileImage alt='Dog image' src='https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg' />
      <ProfileDescription fullname='Sumo' desc='Happiest dog in the world!' />
    </div>)
  }
}

export default ProfileCard;
