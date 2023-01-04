import React from 'react'
import BestHostingSection from '../Components/Home/BestHostingSection'
import FindDomain from '../Components/Home/FindDomain'
import OptimizeWebsiteSection from '../Components/Home/OptimizeWebsiteSection'
import PriceingPlan from '../Components/Home/PricePlan'

const Home = () => {
  return (
   <> 
   <FindDomain/>
   <BestHostingSection/>
   <OptimizeWebsiteSection/>
   <PriceingPlan/>
   </>
  )
}

export default Home