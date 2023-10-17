import React from 'react';
import logo from '../assets/image 1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className=' pt-6 text-white bg-gradient-to-r from-blue-800 to-purple-950'>
        <div className='flex flex-wrap w-[94vw] mx-auto items-start justify-start md:max-lg:ml-16 lg:justify-evenly '>
            <div className='my-4 lg:w-[16vw]'>
                <img src={logo} alt="logo" className='invert'/>  
                <p className='w-[80vw] text-lg lg:w-[16vw]'>India's first platform dedicated to simplifying partner search</p>          
            </div>
            <div className='my-5 mx-2 w-[40vw] lg:w-[8rem]'> 
                <h6 className='font-bold'>COMPANY</h6>
                <p>About</p>
                <p>Pricing</p>
                <p>Careers</p>
            </div>
            <div className='my-5 mx-2 w-[40vw] lg:w-[8rem]'>
                <h6 className='font-bold'>SOLUTIONS</h6>
                <p>Search</p>
                <p>Connect</p>
                <p>Research</p>
                <p>Academy</p>
            </div>
            <div className='my-5 mx-2 w-[40vw] lg:w-[8rem]'>
                <h6 className='font-bold'>RESOURCES</h6>
                <p>Blogs</p>
                <p>Forms</p>
            </div>
            <div className='my-5 mx-2 w-[40vw] lg:w-[8rem]'>
                <h6 className='font-bold'>SUPPORT</h6>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
            <div className='my-5 mx-2 w-[40vw] lg:w-[8rem]'>  
                <h6 className='font-bold'>Legal</h6>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Accessibility</p>
            </div>
        </div>
        <hr className='m-auto my-4 border-t-2 border-white w-[87vw] '/>
        <div className='pt-1 px-2 lg:flex lg:justify-between lg:px-10 lg:w-[94vw] lg:m-auto'>
            <p className='my-4 mx-4 text-center text-lg '>Sambhaji Nagar, No2, St.Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className='p-4 flex justify-evenly items-center lg:w-[25vw]'>
            <Link><FontAwesomeIcon icon={faFacebook}  size='2x' style={{color: "#ffffff",}} /></Link>
            <Link><FontAwesomeIcon icon={faInstagram} size='2x' style={{color: "#ffffff",}} /></Link>
            <Link><FontAwesomeIcon icon={faLinkedin}  size='2x' style={{color: "#ffffff",}} /></Link>
            <Link><FontAwesomeIcon icon={faWhatsapp}  size='2x' style={{color: "#ffffff",}} /></Link>
            </div>
        </div>
        <div className='mt-4 py-6 px-2 bg-black text-center'>
            <p>Registered trademark of India Private Limited 2023. loremipsum Inc. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;