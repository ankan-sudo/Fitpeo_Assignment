import React, { useState } from 'react';
import { MdHome, MdBarChart, MdShoppingBag } from 'react-icons/md';
import { FaClipboardCheck } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import Listitem from "./Listitem";

const style = {
  fontSize: "30px",
};

const data = [
  {
    title: "Dashboard",
    Icon: <MdHome style={style} />,
    isActive: true,
  },
  {
    title: "Statistics",
    Icon: <MdBarChart style={style} />,
    isActive: false,
  },
  {
    title: "Checklist",
    Icon: <FaClipboardCheck style={style} />,
    isActive: false,
  },
  {
    title: "Wallet",
    Icon: <TfiWallet style={style} />,
    isActive: false,
  },
  {
    title: "Purchase",
    Icon: <MdShoppingBag style={style} />,
    isActive: false,
  },
];

function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);

  const hideDashboard = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={` text-gray-100 bg-gray-800 ${isHidden ? "w-fit" : "w-64"}`}>
      <div className="flex px-2 mb-12 items-center text-3xl gap-4">
        <FaBars className="cursor-pointer" onClick={hideDashboard} />
        {!isHidden && <span className='p-3'>Fitpeo</span>}
      </div>
      <div>
        {data.map((el, i) => (
          <Listitem
            key={i}
            title={el.title}
            Icon={el.Icon}
            hidden={isHidden}
            isActive={el.isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
