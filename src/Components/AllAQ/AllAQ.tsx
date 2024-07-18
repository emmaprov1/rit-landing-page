import React from 'react';
import './AllAQ.scss';

const AllAQ = () => {
    const context: any = sessionStorage.getItem('contexts');
    const stringTexts = JSON.parse(context)

  return (
    <div className='AllAQ py-5'>
        <div className="container">
            <h1 className="h1 text-center pb-5">{stringTexts && stringTexts.faq_section_title}</h1>
            <div className="row w-100 mx-auto">
                <div className="col-lg-6 p-3">
                    
                    <div className="text-cont p-3 text-center text-lg-start mb-3 ">
                        <div className="heading">{stringTexts && stringTexts.faq_section_question}</div>
                        <div className="texts mt-2 pb-4">{stringTexts && stringTexts.faq_section_answer}</div>
                    </div>
                    
                    <div className="text-cont p-3 text-center text-lg-start mb-3 ">
                        <div className="heading">{stringTexts && stringTexts.faq_section_question_2}</div>
                        <div className="texts mt-2 pb-4">{stringTexts && stringTexts.faq_section_answer_2}</div>
                    </div>
                    
                    <div className="text-cont p-3 text-center text-lg-start mb-3 ">
                        <div className="heading">{stringTexts && stringTexts.faq_section_question_3}</div>
                        <div className="texts mt-2 pb-4">{stringTexts && stringTexts.faq_section_answer_3}</div>
                    </div>
                    
                    <div className="text-cont p-3 text-center text-lg-start mb-3 ">
                        <div className="heading">{stringTexts && stringTexts.faq_section_question_4}</div>
                        <div className="texts mt-2 pb-4">{stringTexts && stringTexts.faq_section_answer_4}</div>
                    </div>                
                </div>
                <div className="col-lg-6 p-3 row mx-auto">

                    <div className="img-cont col-lg-6 p-3 d-flex">
                        <img src={stringTexts && stringTexts.faq_section_image_1} className='w-100 h-100' alt="" />
                    </div>
                    
                    <div className="img-cont col-lg-6 p-3 d-flex">
                        <img src={stringTexts && stringTexts.faq_section_image_2} className='w-100 h-100' alt="" />
                    </div>
                    
                    <div className="img-cont col-lg-12 p-3 d-flex">
                        <img src={stringTexts && stringTexts.faq_section_image_3} className='w-100 h-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllAQ