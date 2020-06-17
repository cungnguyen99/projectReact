import React, { Component } from 'react'
import defaultBcg from '../images/pexels-photo-1571783.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link } from 'react-router-dom'
import {RoomContext} from '../context/Context'
import StyledHero from '../components/StyledHero'
//phím tắt rcc
export default class SingleRoom extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state={
      //lấy ra đường dẫn slug khi bấm link. xem ở trong console.log(props) để biết match là cái gì  
      slug: this.props.match.params.slug,
      //nghĩa là defaultBcg: defaultBcg
      defaultBcg
    }
  }

  static contextType=RoomContext;
  render() {
    const {getRoom}= this.context
    const room=getRoom(this.state.slug)
    //nếu không có rooms thì báo lỗi
    if(!room){
      return(
        <div className="error">
          <h3>no such car could be fonud...</h3>
          <Link to="/room" className="btn-primary">Back to cars</Link>
        </div>
      )
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images}=room;
    return (
      <>
      <StyledHero imgHeaderSingleRoom={images[0] || defaultBcg}>
        <Banner title={`${name} car`}>
          <Link to='/rooms' className="btn-primary">
            Back to cars
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {
            images.map((item, index)=>{
              return <img key={index} src={item} alt={name}/>
            })
          }
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: {price} $</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity: {""}
              {capacity>1?`${capacity} people`:`${capacity} person`}
            </h6>
            {/* Nếu pets là true thì in pet allowed false thì in not allowed */}
            <h6>{pets?"pets allowed":"pets not allowed"}</h6>
            <h6>{breakfast&&"free breackfast include"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6> extras </h6>
        <ul className="extras">
          {extras.map((item, index)=>{
            return <li key={index}>-{item}</li>
          })}
        </ul>
      </section>
      </>
    )
  }
}
