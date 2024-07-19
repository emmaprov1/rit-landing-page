import React from 'react';
import './HomeFooter.scss';

const HomeFooter = () => {
  const context: any = sessionStorage.getItem('contexts');
  const stringTexts = JSON.parse(context)

  return (
    <div className='HomeFooter text-center px-0 w-100'>
        <div className="inner-footer py-4 d-flex align-items-center ">
            <div className="mx-auto container">
                <h3 className="h3 pb-3">{stringTexts && stringTexts.cta_top_title}</h3>
                <h1 className="h1">{stringTexts && stringTexts.cta_title}</h1>
                <div className="btn-container mt-4">
                  <a href={stringTexts && stringTexts.cta_button_url}>
                    <button className="btn rounded-pill p-3 mx-auto">{stringTexts && stringTexts.cta_button_label}</button>
                  </a>
                </div>
            </div>
        </div>
        <div className="dark-copyright-footer-section py-4 px-3">
            @{stringTexts && stringTexts.copyright_year} {stringTexts && stringTexts.copyright_title}. All rights reserved.  <a href={stringTexts && stringTexts.copyright_privacy_policy_url}>Privacy Policy</a>  |  Created by <a href="https://surfclickinnovations.com/">{stringTexts && stringTexts.company}</a> 
        </div>
    </div>
  )
}

export default HomeFooter