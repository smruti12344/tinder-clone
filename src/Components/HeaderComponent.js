import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import '../css/HeaderComponent.css';
function HeaderComponent() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon fontSize='large' className='header_icons'/>
      </IconButton>
      <img className='header_logo' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'/>
     <IconButton>
      <ForumIcon fontSize='large' className='header_icons'></ForumIcon>
     </IconButton>
    </div>
  )
}

export default HeaderComponent
