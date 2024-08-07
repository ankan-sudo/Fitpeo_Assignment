import React from "react";
import { FaBullseye, FaHamburger, FaUtensils, FaAngleRight } from 'react-icons/fa';

const MenuList = () => {
  const menuItems = [
    { icon: <FaBullseye />, label: 'Goals', bgColor: 'bg-orange-500' },
    { icon: <FaHamburger />, label: 'Popular Dishes', bgColor: 'bg-blue-500' },
    { icon: <FaUtensils />, label: 'Menus', bgColor: 'bg-teal-500' }
  ];

  return (
    <div className=" h-64 w-2/3 rounded-xl bg-gray-900">
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-4 mb-2 bg-gray-800 rounded-lg">
          <div className={`flex items-center justify-center w-10 h-10 ${item.bgColor} rounded-full text-white`}>
            {item.icon}
          </div>
          <span className="text-white flex-1 ml-4">{item.label}</span>
          <div className="text-gray-400">
            <FaAngleRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
