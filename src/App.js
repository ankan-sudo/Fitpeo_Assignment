import React from 'react';
import Header from "./components/Header/Header";
import MenuList from "./components/MenuList/MenuList";
import Sidebar from "./components/Sidebar/Sidebar";
import { FiSearch } from 'react-icons/fi'
import CurrentOrders from './components/Dashboard/CurrentOrders'
import ActivityChart from "./components/Activity/ActivityChart";
import RecentOrders from './components/RecentOrders/RecentOrders'
import Feedback from './components/Feedback/Feedback'
import NetProfitCard from './components/NetProfitCard/NetProfitCard';

function App() {
  return (
    <div className="flex bg-black">
      <Sidebar />
      <div className="flex flex-col w-full ml-1/2">
        <div className="top-0 w-full flex justify-between items-center p-4 bg-gray-900 text-white z-10">
          <div className="relative ">
            <input type="text" placeholder="Search" className="w-full p-3 pl-10 rounded-md bg-gray-700 text-white focus:outline-none" />
            <FiSearch className="absolute left-3 top-4 text-white-400" />
          </div>
          <div className="py-1 px-2 bg-gray-700 rounded-md text-gray-200 flex items-center">
            <Header />
          </div>
        </div>
        <div className=" px-2 py-2 ">
          <div className="flex flex-row max-sm:flex-col max-md:flex-col justify-evenly gap-3 mt-3">
            <CurrentOrders />
            <NetProfitCard />
          </div>
          <div className="flex flex-row max-sm:flex-col max-md:flex-col justify-evenly gap-3 mt-3">
            <ActivityChart />
            <MenuList />
          </div>
          <div className="flex flex-row max-sm:flex-col max-md:flex-col justify-evenly gap-3 mt-3">
            <RecentOrders />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
