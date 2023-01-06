import React from 'react'
import BestHostingSection from '../Components/Home/BestHostingSection'
import FindDomain from '../Components/Home/FindDomain'
import MainInfo from '../Components/Home/MainInfo'
import OptimizeWebsiteSection from '../Components/Home/OptimizeWebsiteSection'
import PricePlanSection from '../Components/Home/PricePlanSection'

const Home = () => {
  return (
   <> 
   <FindDomain/>
   <BestHostingSection/>
   <OptimizeWebsiteSection/>
   <PricePlanSection/>
   <MainInfo/>
   </>
  )
}

export default Home