import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <nav>
      <img src={logo} />
      <h3>Mobilization travel journal</h3>
    </nav>
  )
}

export default Navbar