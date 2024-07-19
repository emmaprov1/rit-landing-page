import React, { useEffect, useState } from 'react';
import './Home.scss';
import { 
  AllAQ, 
  HomeDarkSection, 
  HomeFooter, 
  HomeHeader, 
  HomeRidersReview, 
  HomeSideEbikeDisplayHeader 
} from '../../Components';
import ConfigDB from '../../../../Config/ConfigDB';

const Home = () => {
  const [data, setData] = useState<Promise<string | boolean>>()
    // const [datas, setDatas] = useState<any>();
    // const [error, setError] = useState<any>();

  useEffect( () => {
    onMount()
  }, [])

  const onMount = async () => {
    
    const db: any = await ConfigDB()
    console.log(db)
    setData(db)
  }


  return (
    <div className='Home'>
      <div className={data ? `d-none` : `Loader-cont d-block w-100 d-flex justify-content-center align-items-center`}>
        {/* {error === 'null' ? <span>Oops! Check your internet and try again</span> : */}
        <span className="spinner-border"></span>
         {/* } */}
      </div>
      <div className={data ? `d-block` : `d-none`}>
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