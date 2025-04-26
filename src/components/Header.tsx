import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-white'} shadow-sm`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
        <div className="text-center flex-1">
      <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
        AI Safety Incident Dashboard
      </h1>
     
    </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-neutral-700 hover:bg-neutral-600' 
                  : 'bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;