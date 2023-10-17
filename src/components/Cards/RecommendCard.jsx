import React from 'react';
import img from '../../assets/rectangle.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons'

const RecommendCard = (props) => {
  return (
    <div className='my-8 bg-white rounded-2xl w-[85vw] mx-auto shadow-2xl lg:mx-4 lg:w-[26vw]'>
        <img src={img} alt="cardImg" className='object-cover rounded-2xl w-[100%]' />
        <div className='p-5'>
            <div className='my-1 flex justify-between items-center text-xl font-bold'>
                <h5>{props.name}</h5>
                <p>{props.price}</p>
            </div>
            <p className='my-2'>I will do business evaluation and corporate services</p>
            <p className='my-2'><FontAwesomeIcon icon={faStar} style={{color: "#005cfa",}} /> <span className=' text-sky-600 font-medium'>{props.rating}</span> {props.reviewCount}</p>
            <button className='my-2 py-3 w-[100%] rounded-xl text-white font-bold bg-sky-700'>View services</button>
        </div>
        
    </div>
  )
}

export default RecommendCard