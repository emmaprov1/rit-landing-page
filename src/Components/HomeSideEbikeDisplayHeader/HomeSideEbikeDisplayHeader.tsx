import e_bike from '../../imgs/ebike001.png';
import './HomeSideEbikeDisplayHeader.scss';
import React from 'react'

const HomeSideEbikeDisplayHeader = () => {

  const context: any = sessionStorage.getItem('contexts');
  const stringTexts = JSON.parse(context)
  

  return (
    <div className='side-header container'>
      <div className='row w-100 mx-auto align-items-center justify-content-center  mx-auto'>
        <div className='col-lg-6 pe-lg-5'> 
          <img src={stringTexts && stringTexts.intro_left_image} className='w-100 h-100' alt='eBIKe'/>
        </div>
        <div className='col-lg-6 ps-lg-5 pt-5 pt-lg-0 text-column'>
          <h1 className='h1 p-0'>
            eBIKe is the <span className='blue-text'>Best Electric 
              <br className='d-none d-lg-block'/> 
              Bike </span> for Commuting and Recreation
          </h1> 
          <div className="stars-container py-2">
            <span className="stars pe-1">★</span>
            <span className="stars pe-1">★</span>
            <span className="stars pe-1">★</span>
            <span className="stars pe-1">★</span>
            <span className="stars pe-1">★</span>
            <span className="review-link-container ps-2">
                <a href="#" className='review-link'>Read Reviews</a>
            </span>
          </div>
          <div className="text-descr">
            {stringTexts && stringTexts.intro_right_excerpt}
          </div>
          <div className="btn-container mt-4">
            <a href={stringTexts && stringTexts.intro_button_url}>
              <button className="btn rounded-pill">
                {stringTexts && stringTexts.intro_button_label}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSideEbikeDisplayHeader