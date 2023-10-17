import React from 'react'

const JoinCard = ({card}) => {
  return (
    <div className='mx-4 my-4  w-[28rem] bg-white rounded-2xl shadow-xl '>
        <div className='py-2 px-3 bg-gradient-to-r from-blue-700 to-pink-800 text-transparent absolute text-white font-semibold rounded-xl text-xl'>{card.id}<sup>{card.sup}</sup></div>
        <div className='flex flex-col items-center content-center justify-center pt-10 w-[19rem] m-auto text-center'>
            <h5 className='font-bold text-xl'>{card.title}</h5>
            <p>{card.desc}</p>
        </div>
        <div className='my-4 mx-8 py-4 px-8 rounded-xl flex items-start justify-between bg-gray-200 '>
            <div className='flex flex-col '>
                <h6 className='font-bold pb-2 text-cyan-800'>Due date</h6>
                <p>{card.dueDate}</p>
            </div>
            <div className='flex flex-col'>
                <h6 className='font-bold pb-2 text-orange-700 flex flex-col'>Penalty fees</h6>
                {
                    card.penalty.map((penalty, index) => {
                        return(
                            <p key={index}><span className='font-bold'>{penalty.amount}</span> {penalty.info}</p>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default JoinCard