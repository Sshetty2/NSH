import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ pathname }) => {
  const profileStyles = pathname.includes('profile') ? 'profile-active' : 'profile-button';

  return (
    <div className='NavBar'>
      <NavLink to='/'><h2 className='ventures-title'>Ventures</h2></NavLink>
      <p className='ventures-slogan'>A place to find and track outdoor events that speak to you.</p>
      <NavLink exact to='/' className='home-button' activeClassName='home-active' />
      <NavLink to='/profile/upcoming' className={profileStyles} />
    </div>
  )
}

export default NavBar;