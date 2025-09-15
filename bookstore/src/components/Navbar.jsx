import {React, useState} from 'react'
import './Navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { TbArrowsSort } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar({onSearch, value: searchTerm}) {
     //const [searchTerm, setSearchTerm] = useState('');

     const handleSearchChange = (e) => {
        //setSearchTerm(e.target.value);
         onSearch(e.target.value);
     };
  return (
    <nav className= "navbar">
            <div className= "left">
                <span className= "logo">kindle</span>
                <div className= "searchBox">
                    <IoSearchOutline className= "searchIcon" />
                    <input
                        type="text"
                        placeholder="Search your Kindle"
                        className= "searchInput"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className= "right">
                <div className= "menuItem">
                    <LuSettings2 className= "filterIcon" />
                    <span className= "menuText">Filter</span>

                </div>

                <div className= "menuItem">

                    <TbArrowsSort className= "sortIcon" />

                    <span className= "menuText">Sort by: Recent</span>
                </div>
                <div className= "menuItem">

                    <BsFillGrid3X3GapFill className= "viewIcon" />

                    <span className= "menuText">View</span>
                </div>
                <div className= "menuItem">

                    <LuShoppingCart className= "cartIcon"/>

                </div>
                <div className= "menuItem">

                    <BsThreeDotsVertical className= "moreIcon"/>

                </div>
            </div>
        </nav>
  )
}

export default Navbar