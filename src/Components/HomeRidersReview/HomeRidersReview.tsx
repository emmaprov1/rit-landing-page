import React from 'react';
import './HomeRidersReview.scss';

const HomeRidersReview = () => {
  return (
    <div className='HomeRidersReview container'>
        <h1 className="h1 text-center">Riders love their eBIKe</h1>
        <div className="row mx-auto w-100 px-3 mt-4 justify-content-center">

            <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                    "I love my eBIKe! It's so easy to ride and it's great for getting around town."
                </div>
                <div className="name mt-3">Jane Doe</div>
            </div>
            
            <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                "The eBIKe is the best electric bike I've ever owned. It's fast, it's fun, and it's great for the environment."
                </div>
                <div className="name mt-3">John Smith</div>
            </div>
            
            <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                "I'm so glad I bought the eBIKe! It's the perfect way to get around town without having to worry about traffic or parking."
                </div>
                <div className="name mt-3">Susan Jones</div>
            </div>
        </div>
    </div>
  )
}

export default HomeRidersReview