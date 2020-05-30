/**
 * File này để dùng cho component SingleRooms. Ta muốn khi nhấn vào từng hình ảnh oto để xem chi
 * tiết của oto đó thì ảnh đó sẽ là ảnh bìa luôn của trang singleroom thì làm thế này.
 */
import styled from 'styled-components'
import defaultImg from '../images/pexels-photo-1571783.jpeg'
//ảnh bìa ở header nên .header
const StyledHero=styled.header`
  min-height: 60vh;
  background: url(${props=>props.imgHeaderSingleRoom?props.imgHeaderSingleRoom:defaultImg}) 
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//dòng 10 là tên của props khi ta truyền vào StyledHero ở bên trang singleroom. Dùng thế này 
//thì không dùng component Hero bên single room để hiện ảnh bìa nữa mà sẽ dùng StyledHero
export default StyledHero;
