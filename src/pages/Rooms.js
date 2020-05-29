import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
//phím tắt: rafc
export const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="our cars">
        <Link to='/' className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Rooms;