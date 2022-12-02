import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import './Features.css';

const Features = () => {
  return (
    <div>
    <div className='container-fluid pt-5'>
      <div className='row px-xl-5 pb-3'>
      <div className='col-lg-3 col-md-6 col-sm-12 pb-1'>
        <div className='d-flex align-items-center border mb-4'>
        <div className='feature-container'>
        <CheckIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/> 
        <h2 style={{fontSize:"23px"}}>
          Quality Product
        </h2>
        </div>
      </div>
      </div> 

      <div className='container col-lg-3 col-md-6 col-sm-12 '>
      <div className='d-flex align-items-center border mb-4'>
      <div className='feature-container'>
        <LocalShippingIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{fontSize:"23px"}}>
          Free Shipping
        </h2>
      </div>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12  '>
      <div className='d-flex align-items-center border mb-4'>
        <div className='feature-container'>
        <SwapHorizIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{fontSize:"23px"}}>
          14-Day Return
        </h2>
      </div>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12 '>
      <div className='d-flex align-items-center border mb-4'>
        <div className='feature-container'>
        <WifiCalling3Icon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{fontSize:"23px"}}>
          24/7 Support
        </h2>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Features; 