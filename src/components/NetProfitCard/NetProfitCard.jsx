import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { IoMdArrowDropup } from "react-icons/io";
import 'react-circular-progressbar/dist/styles.css';

function NetProfitCard() {
  const percentage = 70; 
  const netProfit = '$6759.25';
  const increase = 3; 

  return (
    <div className="bg-gray-800 text-white p-4 my-2 mb-3 mt-3 md:h-fit md:w-fit sm:h-fit sm:w-fit rounded-lg flex flex-row justify-between items-center h-30 w-96">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-bold">Net Profit</h2>
        <p className="text-3xl font-bold">{netProfit}</p>
        <p className="text-green-500 flex items-center">
        <IoMdArrowDropup className="text-lg" /> {increase}%
        </p>
        <p className="text-xs text-gray-400 mt-1">*The values here have been rounded off.</p>
      </div>
      <div className="w-12 h-13">
        <CircularProgressbar strokeWidth={15} value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}

export default NetProfitCard