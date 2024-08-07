import React from 'react'
import { TbBasketPlus } from "react-icons/tb";
import { TbBasketCheck } from "react-icons/tb";
import { TbBasketX } from "react-icons/tb";
import { TbShoppingCartDollar } from "react-icons/tb";
import Cards from './Cards';

const CurrentOrders = () => {
    const style = {fontSize:"32px"}
    const data = [
        {
            Icon : <TbBasketPlus style={style} />,
            Title: "Total Orders",
            loss:"",
            profit:"3",
            total: "75" 
        },
        {
            Icon: <TbBasketCheck style={style} />,
            Title: "Total Delivered",
            loss:"3",
            profit:"",
            total: "70"
        },
        {
            Icon: <TbBasketX style={style} />,
            Title: "Total Cancelled",
            loss:"",
            profit: "3",
            total: "05"
        },
        {
            Icon: <TbShoppingCartDollar style={style} />,
            Title: 'Total Revenue',
            loss:"3",
            profit:"",
            total: "$12k"
        }
    ]
  return (
    <div className='h-full w-full grid grid-cols-2 gap-4 max-sm:gap-3 mx-auto lg:grid-cols-4 max-sm:grid-cols-1 py-3'>
       {data.map((el,i) => (
        <Cards {...el} />
       ))}
    </div>
  )
}

export default CurrentOrders
