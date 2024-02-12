import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/Icon.png';

import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.addEventListener('scroll', handleScroll);
        }
    });

    //NavItems
    const navitems = [
        {link: "Service", path: "service"},
        {link: "Home", path: "home"},
        {link: "About", path: "sbout"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},
    ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
       <nav className={`py-4 lg:px-14 px-14 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : " "}`}>
          <div className='flex justify-between items-center text-base gap-8'>
             <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-[#263238] '>NEXCENT</span></a>

             {/* nav items for large devices */}
             <ul className='md:flex space-x-12 hidden'>
                    { 
                       navitems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-blue-500 first:font-medium'>{link}</Link> ) 
                    }
             </ul>
             {/* Button for large devices */}
             <div className='space-x-12 hidden lg:flex items-center'> 
                    <a href="/" className='hidden lg:flex items-center text-blue-500 hover:text-gray-900 '>Login</a>
                    <button className='bg-blue-500 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-500'>Sign up</button>
             </div>

                <div className='md:hidden'>
                    <button 
                    onClick={toggleMenu}
                    className=' text-gray-600 focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? ( <FaXmark className='h-6 w-6 '/> ) : (<FaBars className='h-6 w-6' />)
                        }
                    </button>
                </div>
          </div>

          {/* nav items for mobile devices */}
          <div className={` space-y-4 px-4 mx-4 mt-16 py-7 bg-blue-400 ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          { 
                       navitems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-blue-500 first:font-medium'>{link}</Link> ) 
                    }               
          </div>
       </nav>
    </header>
  );
}

export default Navbar
