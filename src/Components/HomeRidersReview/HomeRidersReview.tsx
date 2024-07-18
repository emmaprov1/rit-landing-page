import React from 'react';
import './HomeRidersReview.scss';

const HomeRidersReview = () => {
    const context: any = sessionStorage.getItem('contexts');
    const stringTexts = JSON.parse(context)

  return (
    <div className='HomeRidersReview container'>
        <h1 className="h1 text-center">{stringTexts && stringTexts.review_section_title}</h1>
        <div className="row mx-auto w-100 px-sm-3 mt-4 justify-content-center">

            <div className="col-lg-4 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                    {stringTexts && stringTexts.review_content}
                </div>
                <div className="name mt-3">{stringTexts && stringTexts.review_author}</div>
            </div>
            
            <div className="col-lg-4 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                {stringTexts && stringTexts.review_content_2}
                </div>
                <div className="name mt-3">{stringTexts && stringTexts.review_author_2}</div>
            </div>
            
            <div className="col-lg-4 col-sm-8 px-4 mx-auto text-center">
                <div className="stars-container text-center mt-3 mt-lg-4">
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                    <span className="stars pe-1">★</span>
                </div>
                <div className="texts mt-2">
                {stringTexts && stringTexts.review_content_3}
                </div>
                <div className="name mt-3">{stringTexts && stringTexts.review_author_3}</div>
            </div>
        </div>
    </div>
  )
}

export default HomeRidersReview