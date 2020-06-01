import React, { Component } from 'react'
import items from '../data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state={
    //dùng trước
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,

    //dùng sau
    type: "all",
    capacity: 0,
    price: 0,
    minPrice:0,
    maxPrice:0,
    minSize: 0,
    maxSize: 0,
    breackfast:false,
    pets:false
  }
  //get Data
  componentDidMount(){
    let rooms=this.formatData(items)
    let featuredRooms=rooms.filter(room=>room.featured===true)

    //lấy ra giá lớn nhất
    let maxPrice=Math.max(...rooms.map(item=>item.price))
    //lấy ra giá bé nhất
    let maxSize=Math.min(...rooms.map(item=>item.size))

    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
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

  handleChange=event=>{
    /**
     * lấy ra kiểu, tên, giá trị của sự kiện envent
     * const type=event.target.type
     * const name=event.target.name
     * const value=event.target.value
     */
    const target=event.target
    const value=event.type==="checkbox"?target.checked:target.value
    const name=event.target.name
    this.setState({
      [name]:value
      //khi nhấn sự kiện thì gọi hàm filterrooms ra
    },this.filterRooms)

  }

  filterRooms=()=>{
    let { rooms, type, capacity, price, minSize, maxSize, breackfast, pets}=this.state
    let tempRooms=[...rooms]
    if(type!=='all'){
      tempRooms=tempRooms.filter(room=>room.type===type)
    }
    this.setState({
      sortedRooms: tempRooms
    })
  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange:
      this.handleChange}}>
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