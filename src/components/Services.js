import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {
  state={
    services:[
      {
        icons:<FaCocktail/>,
        title: 'Free Cocktail',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur!.'
      },
      {
        icons:<FaHiking/>,
        title: 'Endless Hiking',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur!.'
      },
      {
        icons:<FaShuttleVan/>,
        title: 'Free Shuttle',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur!.'
      },
      {
        icons:<FaBeer/>,
        title: 'Strongest Beer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur!.'
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title='Services'/>
        <div className='services-center'>
          {
            this.state.services.map((item, index)=>{
              return <article key={index} className="service">  
              <span>{item.icons}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
              </article>
            })
          }
        </div>

      </section>
    )
  }
}
