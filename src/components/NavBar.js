import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'
export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state=({
      isOpen: false
    })
  }
  handleTogle=()=>{
    this.setState({isOpen: !this.state.isOpen})
  }
  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Movies cinema"/>
            </Link>
            <button className="nav-btn" type='button' onClick={this.handleTogle}>
              <FaAlignRight className="nav-icon"/>
            </button>
          </div>
           {/* Khi co vào màn hình nhỏ sẽ hiện ra icon do bên css đảm nhận.
              Khi hiện ra icon rồi nếu click sẽ thay đổi state isOpen từ false sang true.
              Nếu true thì ul sẽ có class là nav-links show-nav-là thứ mà làm cho 2 cái li HOME ROOMS
              hiện ra theo kiểu dọc. Hiện ra hay mất chỉ là do css chứ kp do click vào sẽ hiện ra mà
              click vào isOpen đổi giá trị nếu true mới có css để hiện ra. cái onClick ở btn kia 
              chỉ làm thay đổi giá trị của isOpen thôi và ul dựa vào giá trị đó mà thêm class vào 
              để hiện ra. Và khi co vào mất 2 cái HOME ROOMS là do reponsive, co vào sẽ mất.
              Nhấn vào icon thì hiện ra*/}
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Cars</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
