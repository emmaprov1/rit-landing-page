import React from 'react';
import './HomeDarkSection.scss'

const HomeDarkSection = () => {
  return (
    <div className='Home-dark-sect'>
        <div className="container">
            <div className="row mx-auto w-100 py-5 px-3 justify-content-center">

                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">Do good.</h1>
                    <h3 className="h3 py-3 bluewish-text">20% More Environmentally Friendly</h3>
                    <div className="texts">
                        While all electric bikes are a great way to reduce your carbon footprint, eBIKe goes the extra mile. They produce zero emissions and last 20% longer on a single charge, which makes them a much more sustainable option.
                    </div>
                </div>

                
                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">Feel good.</h1>
                    <h3 className="h3 py-3 bluewish-text">Boost your health</h3>
                    <div className="texts">
                    With 20 gear combinations, riding an eBIKe is a great way to get exercise. Its pedal construction provides reduced impact, so it's easy on your joints. And because you can use the electric motor to help you, you can ride for longer periods of time without getting tired.
                    </div>
                </div>

                
                <div className="col-lg-4 col-10 col-sm-8 px-4 mx-auto text-center py-4">
                    <h1 className="h1">eBIKe happy.</h1>
                    <h3 className="h3 py-3 bluewish-text">Have More Fun</h3>
                    <div className="texts">
                    Riding an eBIKe is a blast! It's a great way to get around town and explore new places. And because they're so easy to ride, they're a great option for people of all ages and fitness levels.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDarkSection