import React from 'react'
import { Link } from 'react-router-dom'
const Menu = (props) => 
  <Link to={props.link}>
    <button className="w-full text-center py-[10px] border-b-[1px] border-[#777]">
      <p>{props.title}</p>
    </button>
  </Link>


export default Menu