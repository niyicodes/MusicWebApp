import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
 return (
  <aside>
   <ul className="flex flex-col justify-evenly items-center text-black">
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Pricing</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Product</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">About Us</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Careers</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Community</Link>
    </li>
   </ul>
  </aside>
 )
}

export default SideBar