import React, { useEffect, useState } from 'react';
import axios from 'axios';

import img1 from '../assets/Picture.png';
import img2 from '../assets/Picture (1).png';
import img3 from '../assets/Picture (2).png';
import { Link } from 'react-router-dom';

const SearchSection = () => {

  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/cas").then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
      alert("Cannot get CA's list, something went wrong!");
    })
    
  },[])


  return (
    <div className='flex flex-col justify-center items-center w-[90vw] my-4 mx-auto md:flex-row md:w-[95vw] lg:w-[90vw] lg:h-[85vh]' >
      <div className='flex flex-col items-center justify-center content-center my-8 w-[80vw] md:mx-2 md:w-[45vw] lg:w-[40vw]'>
        <h1 className='bg-1 text-5xl font-bold my-4 lg:text-6xl'>Find <span className='bg-gradient-to-r from-blue-500 to-violet-700 bg-clip-text text-transparent'>Partners</span> (CAs) available online</h1>
        <p><span className='font-medium text-gray-600'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA's for compliance support</p>    
        <div>
        <div className='flex items-center justify-between mt-8 bg-white rounded-xl border border-black w-[75vw] md:w-[42vw] lg:w-[40vw]' style={ {borderBottomLeftRadius : searchVal !== '' ? 0 : '', borderBottomRightRadius : searchVal !== '' ? 0 : ''}}>
          <input 
            type="text" 
            placeholder='Search by name'
            className='border-none focus:outline-none my-4 mx-4 w-[50vw] md:w-[22vw] lg:w-[30vw]'
            onChange={(e) => {setSearchVal(e.target.value)}}
            value={searchVal}
          />
          <button className='bg-blue-500 text-white py-4 px-6 rounded-xl w-[25vw] sm:w-[20vw] lg:w-[8vw]'>Search</button>
          
        </div>
        <div className='bg-white flex flex-col border-2 border-gray-400 empty:border-none z-3 absolute w-[75vw] md:w-[42vw] lg:w-[40vw]'>
            { data.length > 0 ?
              data.filter((item) => {
                const searchTerm = searchVal.toLowerCase();
                const fullName = item.name.toLowerCase();
                return fullName.includes(searchTerm);
              }).map((item) => {
                return(
                  searchVal !== '' 
                  && 
                  <Link to={`/details/${item["id"]}`} key={item["id"]}><div className='cursor-pointer text-left m-2'>{item["name"]}</div></Link>
                )
              })
              :
              searchVal !== '' && <div className='cursor-pointer text-left m-2'>Something Went Wrong!</div>   
            }
          </div>
        </div>
        
      </div>
      <div className='flex items-center justify-center w-[90vw] h-[40vh] sm:h-[50vh] md:justify-center md:h-[70vh] md:w-[45vw]  lg:w-[36vw] lg:overflow-hidden'>
        <img src={img1} alt="" className='object-cover w-[25vw] mx-2 mt-14         md:w-[12vw]  lg:w-[10vw] '/>
        <img src={img2} alt="" className='object-cover w-[25vw] mx-2 mb-14         md:w-[12vw]  lg:w-[10vw] '/>
        <img src={img3} alt="" className='object-cover w-[25vw] mx-2 my-auto       md:w-[12vw]  lg:w-[10vw] '/>
      </div>
    </div>
  )
}

export default SearchSection;
