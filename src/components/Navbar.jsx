import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* menu */}
      <ul className='hidden md:flex'>
 <li className='py-6 text-2xl mx-4'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl mx-4'>
          {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
                </Link>
        </li>
        <li className='py-6 text-2xl mx-4'>
          {' '}
       <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
           </Link>
        </li>
        <li className='py-6 text-2xl mx-4'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-2xl mx-4'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
  
 {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-[10px] '>
        <ul>
        
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
         
            <a
         className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/zethembe-nxumalo-5b6448289/'
          target='_blank'
            rel='noreferrer'
            >
                          Linkedin <FaLinkedin size={30} />
            </a>
          </li>
         
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Zethembe177/'
          target='_blank'
         rel='noreferrer'
            >
                      Github <FaGithub size={30} /> 
        
            </a>
          </li>
       
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
            href='nxumalozethembe@gmail.com'
              target="_blank"
            rel='noreferrer'
            >
         
                  Email <HiOutlineMail size={30} />
       
            </a>
       
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
