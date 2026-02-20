//import React from 'react'

import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p> For Better Experience Download <br/> Tomato App </p>
      <div className="app-download-platfroms">
        <img src={assets.play_store_icon} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
