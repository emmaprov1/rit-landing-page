import React from 'react';
import './HomeDarkSection.scss'

const HomeDarkSection = () => {
    const context: any = sessionStorage.getItem('contexts');
    const stringTexts = JSON.parse(context)

  return (
    <div className='Home-dark-sect'>
        <div className="container">
            <div className="row mx-auto w-100 py-5 px-3 justify-content-center">

                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">{stringTexts && stringTexts.action_section_title}</h1>
                    <h3 className="h3 py-3 bluewish-text">{stringTexts && stringTexts.action_section_sub_title}</h3>
                    <div className="texts">
                        {stringTexts && stringTexts.action_section_content}
                    </div>
                </div>

                
                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">{stringTexts && stringTexts.action_section_title_2}</h1>
                    <h3 className="h3 py-3 bluewish-text">{stringTexts && stringTexts.action_section_sub_title_2}</h3>
                    <div className="texts">
                        {stringTexts && stringTexts.action_section_content_2}
                    </div>
                </div>

                
                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">{stringTexts && stringTexts.action_section_title_3}</h1>
                    <h3 className="h3 py-3 bluewish-text">{stringTexts && stringTexts.action_section_sub_title_3}</h3>
                    <div className="texts">
                        {stringTexts && stringTexts.action_section_content_3}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDarkSection