import React from 'react';
import { FiMail, FiBell, FiSettings } from 'react-icons/fi';

function Header() {
  return (
    <header className="bg-gray-800 h-12 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <FiMail className="w-6 h-6 text-gray-400" />
        <FiBell className="w-6 h-6 text-gray-400" />
        <FiSettings className="w-6 h-6 text-gray-400" />
        <img src="https://www.placeholder.com/32" alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}

export default Header