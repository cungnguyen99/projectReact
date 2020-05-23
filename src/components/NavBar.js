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
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
