import React, { Component } from 'react'
import {RoomContext} from '../context/Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRoom extends Component {
  //cách 2 để lấy ra value từ RoomContext.Provider mà k cần truyền RoomContext.Consumer vào đây
  //Nếu không hiểu xem lại từ đoạn 1h45p
  static contextType=RoomContext
  render() {
    /**
     * có thể viết như thế này gán 1 biến bằng this.context biến value sẽ chứa hết thuộc tính provider
     * chỉ cần lấy biến đó chấm đến thuộc tính cần lấy const value=this.context 
     * console.log(value.featuredRooms)
     * value: đây là biến chứa value bên RoomContext.Provider
     * hoặc viết như thế này
     */
    let { loading, featuredRooms: rooms}=this.context;
    console.log(rooms)
    //map ở trên này chứ kp ở dưới return để ở return kiểm tra chưa lấy dữ liệu xong thì hiện Loading
    rooms=rooms.map(item=>{
      return <Room key={item.id} room={item}/>
    })
    return (
      <section className="featured-rooms">
        <Title title="featured cars"/>
        <div className="featured-rooms-center">
          {loading?<Loading/>:rooms}
        </div>
      </section>
    )
  }
}
