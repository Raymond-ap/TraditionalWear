import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import Logo from '../img/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const{ isOpen, setIsOpen } = useContext(SidebarContext);
  const{ itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container flex flex-1 justify-between items-center h-full mx-auto py-[10px]'>
    <Link to={'/'}>
      <div className=''>
        <img src={Logo} className=' w-[40px]'/>
      </div>
    </Link>
    <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer flex relative'>
      <BsBag className='text-2xl' />
      <div className=' absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[12px] text-white rounded-full flex justify-center items-center bg-red-500 p-2'>
        {itemAmount}
      </div>
    </div>
  </div>
    </header>
  )
};

export default Header;
