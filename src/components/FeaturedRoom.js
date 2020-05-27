import React, { Component } from 'react'
import {RoomContext} from '../context/Context'
import Loading from './Loading'
import Room from './Room'
export default class FeaturedRoom extends Component {
  //cách 2 để lấy ra value từ RoomContext.Provider mà k cần truyền RoomContext.Consumer vào đây
  //Nếu không hiểu xem lại từ đoạn 1h45p
  static contextType=RoomContext
  render() {
    //đây là biến chứa value bên RoomContext.Provider
    const value=this.Context;
    return (
      <div>
        <Room/>
        <Loading/>
      </div>
    )
  }
}
