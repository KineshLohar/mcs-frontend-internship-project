import React, { useEffect, useState } from 'react';

import img from '../assets/rectangle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons'
import RecommendCard from './Cards/RecommendCard';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Details = () => {
    const [data, setData] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/cas`).then((response) => {
            const selectedItem = response.data.find(item => item.id == id);
            setData(selectedItem)
            
    }).catch((err) => {
      console.log(err);
      alert("Cannot get CA's list, something went wrong!");
    })
    },[])
    console.log(data)

  return (
    <>
    {
        !data 
        ?
        <div className="font-extrabold text-4xl mx-10 my-10">SOMETHING WENT WRONG! UNABLE TO FETCH DATA.</div>
        :
        <div>
                <Link to='/'><button className=' p-4 w-[7rem] ml-6 mt-4 text-center font-bold border-2 border-sky-700 rounded-xl lg:ml-12 xl:ml-16' >BACK</button></Link>
                <div className='mx-auto mt-4 w-[90vw] text-lg flex flex-col lg:flex lg:flex-row lg:flex-wrap'>
                    
                    <div className='lg:w=[33vw] lg:mr-4 xl:w-[30vw]'>
                        <div className=' flex flex-col lg:w-[40vw] xl:w-[30vw]'>
                            <h3 className='text-4xl font-bold my-4'>{data.name}</h3>
                            <p className='my-2'>{data.intro}</p>
                            <p className='my-3 text-lg'><FontAwesomeIcon icon={faStar} style={{color: "#005cfa",}} /> <span className=' text-sky-600 font-medium'>{data.rating}</span> ({data.reviewCount})</p>
                        </div>
                        <div className='bg-white p-4 my-4 rounded-2xl shadow-xl w-[90vw] lg:w-[40vw] xl:w-[30vw]'>
                            <div className='my-2 flex items-center justify-between'>
                                <p>{data.taskComplexity}</p>
                                <p className='font-bold'>{data.price}</p>
                            </div>
                            <p className='mt-4'>icon - {data.deliveryTime}</p>
                            <div className='my-2 flex justify-between items-center'>
                                <button className='w-[40vw] px-4 py-3 rounded-lg font-medium text-sm text-white bg-blue-800 lg:w-[25vw] lg:mr-2 lg:px-4  xl:w-[23vw]  '>
                                    Request Proposal
                                </button>
                                <button className='w-[40vw] px-4 py-3 rounded-lg font-medium text-sm border-2 border-sky-800 text-sky-800 lg:w-[25vw] lg:mr-2 lg:px-2 xl:w-[23vw]'>
                                    Chat with me
                                </button>
                            </div>
                        </div>
                        <div className='my-4 bg-white p-4 rounded-2xl shadow-xl w-[90vw] lg:w-[40vw] xl:w-[30vw]'>
                            <h3 className='my-3 font-bold text-2xl'>What people say?</h3>
                            <p className='mb-3'>{data.testimonial.text}</p>
                            <p className="italic text-base text-right">- {data.testimonial.author}</p>
                        </div>
                    </div>

                    <div className='mx-auto my-8 w-[90vw] lg:w-[47vw] lg:my-0 xl:w-[50vw]'>
                        <div>
                            <img src={img} alt="img"  className=' object-cover w-[100%]'/>
                        </div>
                        <h2 className='mt-5 mb-3 font-bold text-2xl'>About {data.name}</h2>
                        <div className='flex flex-col text-lg md:flex-row lg:flex-wrap md:justify-between'>
                            <div className='my-2 flex flex-col '>
                                <h6 className='font-medium text-gray-500'>FROM</h6>
                                <p>{data.about.from}</p>
                            </div>
                            <div className='my-2 flex flex-col md:mx-3'>
                                <h6 className='font-medium text-gray-500'>PARTNER SINCE</h6>
                                <p>{data.about.partnerSince}</p>
                            </div>
                            <div className='my-2 flex flex-col '>
                                <h6 className='font-medium text-gray-500'>AVERAGE RESPONSE TIME</h6>
                                <p>{data.about.averageResponseTime}</p>
                            </div>                
                        </div>
                        <div className='my-3 flex flex-col'>
                            <h6 className='my-2 font-medium text-gray-500'>ABOUT</h6>
                            <p>{data.about.description}</p>
                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
                            <div className='my-3 md:my-2'>
                                <h6 className='my-2 font-medium text-gray-500'>SERVICES I OFFER</h6>
                                <div>
                                    <ul className='px-6 list-disc'>
                                        {
                                            data.about.services.map((item, index)=> (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                        {/* <li>Financial accounting</li>
                                        <li>Financial statements</li>
                                        <li>Bookkeeping</li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className='my-2'>
                                <h6 className='my-2 font-medium text-gray-500'>WHY ME?</h6>
                                <div>
                                <ul className='px-6 list-disc'>
                                    {
                                        data.about.benefits.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
{/*                                         
                                        <li>24/7 customer support</li>
                                        <li>Error-free documents</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto my-8 w-[90vw]'>
                        <h3 className='my-4 font-bold text-2xl'>Recommended for you</h3>
                        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-between'>
                            <RecommendCard name="Michael Jackson" price="₹4,370" rating="4.8" reviewCount="(89)"/>
                            <RecommendCard name="Stevie Wonder" price="₹4,263" rating="5.0" reviewCount="(62)"/>
                            <RecommendCard name="Ray Charles" price="₹2,586" rating="4.3" reviewCount="(189)"/>
                        </div>
                    </div>
                </div>
        </div>
    }
    </>
  )
}

export default Details