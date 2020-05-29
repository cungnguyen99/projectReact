import React from 'react';
import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'

import { Switch, Route } from "react-router-dom";


import NavBar from './components/NavBar'
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      {/* Phần này để cài đặt khi nhập địa chỉ đường dẫn sẽ dẫn đến trang có đường dẫn đó */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms/' component={Rooms}/>
      {/* :slug là một tên biến. để khi ta vào trang room sẽ có nhiều phòng nhưng khi ta nhấn xem một
            phòng thì đường dẫn sẽ là room/id_phòng chứ không phải nhảy sang một route riêng. Ta phải viết
            hàm để Router này biết biến slug là gì để còn render ra  */}
      <Route exact path='/rooms/:slug' component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
   </>
  );
}

export default App;
