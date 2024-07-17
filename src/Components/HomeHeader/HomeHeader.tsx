import React from 'react';
import './HomeHeader.scss'

const HomeHeader = () => {
  return (
    <div className='Header'>
      <h3 className='intro-header text-center'><span className='pe-1'><span className='cap-lett'>I</span>ntroducing</span>
          <div className='blue-text d-inline ps-1'>
              <span className='small-lett'>e</span>
                  BIK
              <span className='small-lett'>e</span>
          </div>
      </h3> 
      <h1 className='text-center pt-4 future-of-eBIKe'>THE ELECTRIC BIKE OF THE <span className='blue-text'>FUTURE</span></h1>
    </div>
  )
}

export default HomeHeader;