import React from 'react';
import './HomeHeader.scss'

const HomeHeader = () => {
  // const context: any = sessionStorage.getItem('contexts');
  // const stringTexts = JSON.parse(context)

  return (
    <div className='Header container'>
      <h3 className='intro-header text-center'>
        <span className='pe-1'>Introducing</span>
        <div className='blue-text d-inline ps-1'>eBIKe</div>
      </h3> 
      <h1 className='text-center pt-2 future-of-eBIKe'>THE ELECTRIC BIKE OF THE <span className='blue-text'>FUTURE</span></h1>
    </div>
  )
}

export default HomeHeader;