import React from 'react';
import aboutImg from '../assets/aboutImg.png';
import magnifyingGlass from '../assets/magnifying.png';
import research from '../assets/research.png';
import connection from '../assets/connection.png';
import hat from '../assets/hat.png';

const About = () => {
  return (
    <div  className='w-[93vw] my-6 mx-auto py-10 flex flex-col lg:flex-row lg:w-[90vw] xl:w-[80vw]'>
        <div className='flex flex-col'>
            <div>
                <h2 className='font-bold text-5xl mx-3 my-4 text-center lg:mx-8 lg:text-left'><span className='b bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent'>All-in-One</span> platform that makes Easier</h2>
                <p className='text-lg text-center px-2'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
            </div>
            <div className='my-4 mx-2 grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center justify-start p-4'>
                    <img src={magnifyingGlass} alt="magnifyingGlass" className='mx-2'/>
                    <p className='text-xl'><span className='font-semibold'>SEARCH</span> for vital company information</p>
                </div>
                <div className='flex items-center justify-start p-4'>
                    <img src={connection} alt="magnifyingGlass" className='mx-2'/>
                    <p className='text-xl'><span className='font-semibold'>CONNECT</span> with the resources to meet your business needs</p>
                </div>
                <div className='flex items-center justify-start p-4'>
                    <img src={research} alt="magnifyingGlass" className='mx-2'/>
                    <p className='text-xl'><span className='font-semibold'>RESEARCH</span> and generate reports that drive growth</p>
                </div>
                <div className='flex items-center justify-start p-4'>
                    <img src={hat} alt="magnifyingGlass" className='mx-2'/>
                    <p className='text-xl'><span className='font-semibold'>ACADEMY</span> to give you skills for success in your career</p>
                </div>
            </div>
        </div>
        <div>
            <img src={aboutImg} alt="img" className='mx-2 rounded-2xl mix-blend-darken lg:my-auto '/>
        </div>
    </div>
  )
}

export default About