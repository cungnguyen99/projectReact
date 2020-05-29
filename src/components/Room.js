import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
//tạo 1 componet Rooms riêng để dùng cho hiện ra các phòng ở featuredroom + ở trang /rooms
export default function Room({room}) {
  //vì biến room ở đây sẽ gán cho item FeaturedRooms mà item có hết thuộc tính của 1 room, room lại
  //gán = item nên ở đây chỉ cần room.thuộc  tính là sử dụng được.
  const {name, slug, images, price}=room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room"/>
      <div className="price-top">
        <h6>{price}$</h6>
        <p>per day</p>
      </div>
      <Link to={`/rooms/${slug}`} className="btn-primary room-link">
        Features
      </Link>
      </div>
    <p className="room-info">{name}</p>
    </article>
  )
}
Room.propTypes={
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}