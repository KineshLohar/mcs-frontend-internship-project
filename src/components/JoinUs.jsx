import React from 'react';
import JoinCard from './Cards/JoinCard';
import joincardjson from '../assets/joincard.json';
import bgsection2 from '../assets/bgsection3.png';

const JoinUs = () => {
  return (
    <div style={{backgroundImage:`url(${bgsection2})`}} className='bg-cover p-4 max-w-[100vw] overflow-hidden py-8'>
        <div className='py-8 px-4 flex flex-col items-center justify-center content-center text-center w-[90vw] m-auto'>
            <h3 className='my-2 text-5xl font-bold'>Want to <span className=' bg-gradient-to-r from-blue-900 to-violet-800 bg-clip-text text-transparent'>Join</span> Us?</h3>
            <p>To remain with us, it is essential that you diligently follow the steps provided</p>
        </div>
        <div className='flex flex-wrap items-center justify-center px-4 w-[90vw] m-auto'>
            {
                joincardjson.map((card, index) => {
                    return(
                        <JoinCard key={index} card={card}/>
                    )
                })
            }
        </div>
        <div className='m-4 py-4 px-8 text-left md:px-16 '>
            <p className='text-lg'>* From forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='p font-bold'>every day</span> until you file the form. There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form.</p>
        </div>
    </div>
  )
}

export default JoinUs;