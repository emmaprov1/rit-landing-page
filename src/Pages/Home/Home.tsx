import React, { useEffect, useState } from 'react';
import './Home.scss';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import HomeSideEbikeDisplayHeader from '../../Components/HomeSideEbikeDisplayHeader/HomeSideEbikeDisplayHeader';
import HomeDarkSection from '../../Components/HomeDarkSection/HomeDarkSection';
import HomeRidersReview from '../../Components/HomeRidersReview/HomeRidersReview';
import AllAQ from '../../Components/AllAQ/AllAQ';
import HomeFooter from '../../Components/HomeFooter/HomeFooter';
// import ConfigDB from '../../Service/ConfigDB';
import axios from 'axios';


const Home = () => {
  // const [data, setData] = useState<any>()
    const [datas, setDatas] = useState<any>();
    const [error, setError] = useState<any>();

  useEffect(() => {
    dbData()
  }, [])

  const dbData = async () => {
    await fetch('https://ritglobalacademy.com/api/ads/easd3e232q')
    .then(response => response.json())
    .then(data => {
      setDatas(data)
      console.log(data)
      sessionStorage.setItem('contexts', JSON.stringify(data.data))
      console.log(data)
    })
    .catch((err) => { 
      console.log(err)
      setError('null')
    })
  }


  return (
    <div className='Home'>
      <div className={datas ? `d-none` : `Loader-cont d-block w-100 d-flex justify-content-center align-items-center`}>
        {error === 'null' ? <span>Oops! Check your internet and try again</span> :<span className="spinner-border"></span>}
      </div>
      <div className={datas && !error ? `d-block` : `d-none`}>
        <HomeHeader />
        <HomeSideEbikeDisplayHeader />
        <HomeDarkSection />
        <HomeRidersReview />
        <AllAQ />
        <HomeFooter />
      </div>
      
    </div>
  )
}

export default Home;