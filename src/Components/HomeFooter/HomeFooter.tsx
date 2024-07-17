import React from 'react';
import './HomeFooter.scss';

const HomeFooter = () => {
  return (
    <div className='HomeFooter text-center'>
        <div className="inner-footer py-4 d-flex align-items-center">
            <div className="mx-auto">
                <h3 className="h3">BUY YOUR eBIKe TODAY</h3>
                <h1 className="h1">Get your eBIKe and Get Going</h1>
                <div className="btn-container mt-4">
                  <button className="btn rounded-pill p-3 mx-auto">BUY NOW $1,850</button>
                </div>
            </div>
        </div>
        <div className="dark-copyright-footer-section py-4 px-3">
            ©2023 eBIKe. All rights reserved.  <a href="#">Privacy Policy</a>  |  Created with <a href="#">Leadpages</a> 
        </div>
    </div>
  )
}

export default HomeFooter