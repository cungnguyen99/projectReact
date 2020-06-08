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
    let maxSize=Math.max(...rooms.map(item=>item.size))
    
    console.log(maxSize)

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
    const value=target.type==="checkbox"?target.checked:target.value
    const name=event.target.name
    this.setState({
      [name]:value
      //khi nhấn sự kiện thì gọi hàm filterrooms ra
    },this.filterRooms)

  }

  filterRooms=()=>{
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets}=this.state
    //get all of rooms
    let tempRooms=[...rooms]

    //tranforms value
    capacity=parseInt(capacity)//do ở trong data lưu là int nhưng trên web lại hiện ra strin
    price=parseInt(price)

    //fil by type
    if(type!=='all'){
      tempRooms=tempRooms.filter(room=>room.type===type)
    }

    //fil by capacity
    if(capacity!==1){
      //n là xe chứa htai nên nếu chọn những xe chưa lớn hơn sẽ hiện ra các xe có sức chưa>xe htai
      /**
       * Lấy chính cai temprooms trên kia để fil tiếp vì nếu ngta chọn type là a thì
       * ở if trên cũng đã lấy chính cái temproom để fil type theo a, sau đó lại lấy chính cái
       * temproom sau khi fil theo type để fil theo cái capacity thì sẽ lấy được ra các xe 
       * vừa fil theo type vừa file theo capacity
       */
      tempRooms=tempRooms.filter(room=>room.capacity>=capacity);
    }

    
    //fil by price
    tempRooms=tempRooms.filter(room=>room.price<=price)

    //fil by  size
    tempRooms=tempRooms.filter(room=>minSize<=room.size&&room.size<=maxSize)

    //fil by breakfast
    if(breakfast){
      tempRooms=tempRooms.filter(room=>room.breakfast===true)
    }
    
     //fil by pets
     if(pets){
      tempRooms=tempRooms.filter(room=>room.pets===true)
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