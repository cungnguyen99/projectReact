import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
import Info from '../components/Info'
export const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="luxurious cars" subtitle="deluxe car starting at $299">
        <Link to='/rooms' className="btn-primary">
          our cars
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <Info/>
    <FeaturedRoom/>
    </>
  )
}
export default Home;
