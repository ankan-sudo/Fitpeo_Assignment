import React from 'react';
import Indicator from './Indicator';

const Cards = ({ Icon, profit, loss, Title, total }) => {
  return (
    <div className="w-full h-full flex items-center bg-gray-800 p-3 rounded-xl mb-1">
      <div className="flex flex-col items-center">
        <div className="h-13 w-13 flex justify-center rounded-xl bg-red-300 p-3 mb-2">
          {Icon}
        </div>
        <div className="text-center">
          <p className="text-sm text-white">{Title}</p>
          <p className="font-bold text-xl text-white">{total}</p>
        </div>
      </div>
      <div className="ml-auto mt-8">
        <Indicator profit={profit} loss={loss} />
      </div>
    </div>
  );
};

export default Cards;
