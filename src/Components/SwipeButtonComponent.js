import React from 'react'
import '../css/SwipButtonComponent.css';
// import icons from material-ui
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
function SwipeButtonComponent() {
  return (
    <div className='swipeBtn'>
      <IconButton className='swipeBtn_repeat'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeBtn_close'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeBtn_star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeBtn_fav'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeBtn_flash'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtonComponent;
