import React from 'react';
import './AllAQ.scss';
import evbike1 from '../../imgs/ebike4.webp';
import evbike2 from '../../imgs/e_bick_1.webp';
import evbike3 from '../../imgs/e_bick_2.webp';

const AllAQ = () => {
  return (
    <div className='AllAQ py-5'>
        <h1 className="h1 text-center pb-5">All the eBIKe A’s to your Q’s</h1>
        <div className="row w-100 mx-auto">

            <div className="col-lg-6 p-3">

                <div className="text-cont p-3 text-center text-lg-start mb-3">
                    <div className="heading">What is the range of the eBIKe electric bike?</div>
                    <div className="texts mt-2 pb-3">The eBIKe has a range of up to 60 miles on a single charge.</div>
                </div>
                
                <div className="text-cont p-3 text-center text-lg-start mb-3">
                    <div className="heading">What is the range of the eBIKe electric bike?</div>
                    <div className="texts mt-2 pb-3">The eBIKe has a range of up to 60 miles on a single charge.</div>
                </div>
                
                <div className="text-cont p-3 text-center text-lg-start mb-3">
                    <div className="heading">What is the range of the eBIKe electric bike?</div>
                    <div className="texts mt-2 pb-3">The eBIKe has a range of up to 60 miles on a single charge.</div>
                </div>
                
                <div className="text-cont p-3 text-center text-lg-start mb-3">
                    <div className="heading">What is the range of the eBIKe electric bike?</div>
                    <div className="texts mt-2 pb-3">The eBIKe has a range of up to 60 miles on a single charge.</div>
                </div>                
            </div>
            <div className="col-lg-6 p-3 row mx-auto">

                <div className="img-cont col-lg-6 p-3 d-flex">
                    <img src={evbike1} className='w-100 h-100' alt="" />
                </div>
                
                <div className="img-cont col-lg-6 p-3 d-flex">
                    <img src={evbike2} className='w-100 h-100' alt="" />
                </div>
                
                <div className="img-cont col-lg-12 p-3 d-flex">
                    <img src={evbike3} className='w-100 h-100' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllAQ