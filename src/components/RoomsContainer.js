import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from '../components/RoomList'
import { withRoomConsumer } from '../context/Context'
import Loading from '../components/Loading'

/**
 * Do RoomsContainer viết bên context đã truyền vào consumer rồi nên lấy được các value
 * của RoomsProvider. Lấy ra được value và truyền vào Roomslist vs Rooms Filter rồi nên
 * bên RoomsList và Roomsfilter kia dùng được
 * @param {*} param0 
 */
function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  }
  return (<div>
    <RoomsFilter rooms={rooms} />
    <RoomsList rooms={sortedRooms} />
  </div>
  );
}

export default withRoomConsumer(RoomsContainer)
// export default function RoomsContainer() {
//   return (
/**
 * Cách 1 lấy value từ RoomsProvider là cách bình thường. Cách 2 là bên featuredrooms
 * dùng static contextType=RoomContext
 */
//     <RoomConsumer>
//       {
//         value=>{
//           const {loading, sortedRooms, rooms}=value;
//           if(loading){
//             return <Loading/>
//           }
//           return (<div>
//             <RoomsFilter rooms={rooms}/>
//             <RoomsList rooms={sortedRooms}/>
//           </div>
//         );
//         }}
//     </RoomConsumer>
//     );
// }
