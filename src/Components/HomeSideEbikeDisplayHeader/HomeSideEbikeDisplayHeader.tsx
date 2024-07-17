import e_bike from '../../imgs/e_bick.jpg';
import './HomeSideEbikeDisplayHeader.scss';
import React from 'react'

const HomeSideEbikeDisplayHeader = () => {
  return (
    <div className='side-header'>
      <div className='row w-100 mx-auto align-items-center justify-content-center  mx-auto'>
        <div className='col-lg-6 pe-lg-5'> 
          <img src={e_bike} className='w-100 h-100' alt='eBIKe'/>
        </div>
        <div className='col-lg-6 ps-lg-5 pt-5 pt-lg-0 text-column'>
          <h1 className='h1 p-0'>
            eBIKe is the <span className='blue-text'>Best Electric <br className='d-none d-lg-block'/> Bike</span> for Commuting and Recreation
          </h1> 
          <div className="stars-container">
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
            The eBIKe is the perfect electric bike for commuting and recreation. It's lightweight and easy to ride, making it perfect for city streets and trails. With a long battery life, you can ride all day without having to worry about running out of power.
          </div>
          <div className="btn-container mt-4">
            <button className="btn rounded-pill p-3">BUY NOW $1,850</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSideEbikeDisplayHeader