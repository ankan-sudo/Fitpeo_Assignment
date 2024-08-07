import React from 'react'
import { MdOutlineArrowDropUp,MdOutlineArrowDropDown } from "react-icons/md";

const Indicator = ({profit,loss}) => {
  return (
    <p className='flex items-center '>
       {profit && (
        <div className='mr-1 flex items-end text-green-600 font-medium'>
          <MdOutlineArrowDropUp style={{fontSize:"20px"}} />
          <span>{profit}%</span>
        </div>
       )}
       {loss && (
        <div className='mr-1 flex items-end text-red-600 font-medium'>
          <MdOutlineArrowDropDown style={{fontSize:"20px"}} />
          <span>{loss}%</span>
        </div>
       )}
    </p>
  )
}

export default Indicator