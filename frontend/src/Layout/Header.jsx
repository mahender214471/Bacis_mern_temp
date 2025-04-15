import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/react.svg"
const Header = () => {
  const menus = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "About",
      to: "/aboout"
    },
    {
      name: "Contact",
      to: "/contact"
    }
  ]
  return (
    <header className='w-full flex items-center justify-between px-6 py-4 bg-indigo-950'>
      <Link to="/">
        <img src={logo} alt='logo' />
      </Link>
      <div className='flex items-center gap-4'>
        {menus?.map((menu, index) => {
          return (
            <Link className='text-xl capitalize text-white' to={menu?.to} key={index}>{menu?.name}</Link>
          )
        })}
      </div>
    </header>
  );
};

export default Header;
