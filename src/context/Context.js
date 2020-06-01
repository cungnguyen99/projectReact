import React, { Component } from 'react'
import items from '../data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  }
  //get Data
  componentDidMount(){
    let rooms=this.formatData(items)
    let featuredRooms=rooms.filter(room=>room.featured===true)
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false
    })
  }
  
  formatData(items){
    let tempItems=items.map(item=>{
      let id=item.sys.id
      let images=item.fields.images.map(image=>image.fields.file.url)
      //lấy tất cả các thứ trong fields nhưng phần images trong fields thì thay bằng 
      //image ở trên (dòng 18) và id ở dòng 17. có thể viết là images: images 
      //nhưng tên trùng nhau nên viết như dưới cũng được
      let room={...item.fields, images,id}
      return room
    })
    return tempItems;
  }

  //get one room by slug
  getRoom=(slug)=>{
    //get all of room in rooms
    let tempRooms=[...this.state.rooms]
    const room=tempRooms.find(room=>room.slug===slug)
    return room
  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer=RoomContext.Consumer

/**
 * Sử dụng hight Oder Component dùng cho RoomsContainer để không phải 
 * viết như phần cmt bên RoomsContainer
 * @param {*} Component 
 */
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>
      {value=><Component {...props} context={value}/>}
    </RoomConsumer>
  }
}

export {RoomConsumer, RoomProvider, RoomContext}