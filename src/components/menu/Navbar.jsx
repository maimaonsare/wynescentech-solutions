import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import logo from '../../img/logo.png';
import './Navbar.css';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
    const [seeSearch, setSearch] = useState(false);
    function togglePop() {
        setSearch(!seeSearch);
    };
  return (
    <div className='nav_menu'>
            <div className='top_nav'>
                <ul className='social_menu'>
                    <li><a href='#'><i class="fa-brands fa-github-square" aria-hidden="true"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-twitter-square"></i></a></li>
                </ul>
                <ul className='account_menu'>
                    <li>
                        <button className='login_btn'>
                            <a href=''>Log In</a>
                        </button>
                    </li>
                    <li>
                        <button className='signup_btn'>
                            <a href=''>Sign Up</a>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='middle_nav'>
                <div className='logo'>
                    <img src={logo} alt='wynescent tech' />
                </div>
                <div className='banner_img'>
                    <span>Email: <span className='bld'>wynescentech@gmail.com</span>
                    </span>
                    <span>Phone: <span className='bld'>+254713860720</span></span>
                </div>
            </div>
            <div className='bottom_nav'>
                <div className='menu_items'>
                    <div className='menu_icon' onClick={toggleNav}>
                        <div>☰</div>
                    </div>
                    {(toggleMenu || screenWidth > 768) && (
                    <ul className='menu_list'>
                        <li><NavLink to='/' onClick={toggleNav}>Home</NavLink></li>
                        <li><NavLink to='/About' onClick={toggleNav}>About Us</NavLink></li>
                        <li><NavLink to='/Online' onClick={toggleNav}>Online</NavLink></li>
                        <li><NavLink to='/Offline'onClick={toggleNav}>Offline</NavLink></li>
                        <li><NavLink to='/Contact' onClick={toggleNav}>Contact</NavLink></li>
                    </ul>
                    )
                    }
                </div>
                <div className='search_bar'>
                    <i className='fa fa-search' onClick={togglePop}/>
                    {seeSearch ? <Searchbar toggle={togglePop} />: null}
                </div>
            </div>
        </div>
  )
}

export default Navbar;