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
          <Link to="/room" className="btn-primary">Back to rooms</Link>
        </div>
      )
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images}=room;
    return (
      <StyledHero imgHeaderSingleRoom={images[0] || defaultBcg}>
        <Banner title={`${name} car`}>
          <Link to='/rooms' className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
    )
  }
}
