import React from 'react'
import Room from '../components/Room'
/**
 * {rooms} này truyền vào lấy bên RoomsContainer
 * @param {*} param0 
 */
export default function RoomList({rooms}) {
  if(rooms.length===0){
    return <div className="empty-search">
      <h3>unfortunately no cars matched your search</h3>
    </div>
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map((item,key)=>{
            return <Room key={item.id} room={item}/>
          })
        }
      </div>
    </section>
  )
}
