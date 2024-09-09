import React from 'react'
import Hero from '../components/Hero'
import LatestColl from '../components/LatestColl'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestColl/>
      <BestSeller/>
      <Policy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
