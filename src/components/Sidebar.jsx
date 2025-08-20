import { useState } from "react";
import { FaBars, FaHome, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <FaHome size={22} /> },
    { name: "Analytics", icon: <FaChartLine size={22} /> },
    { name: "Settings", icon: <FaCog size={22} /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-blue-900 to-blue-700 text-white h-screen transition-all duration-300 flex flex-col`}
    >
      <div className="flex justify-end px-4 py-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:scale-110 transition-transform"
        >
          <FaBars size={22} />
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-6">
        {menus.map((menu, i) => (
          <div key={i} className="relative group">
            <button
              onClick={() => setActivePage(menu.name)}
              className="flex items-center space-x-4 hover:bg-blue-800 p-3 rounded-lg transition-colors w-full"
            >
              <span className="text-2xl">{menu.icon}</span>
              {isOpen && <span className="text-lg font-medium">{menu.name}</span>}
            </button>
            
            {!isOpen && (
              <span className="absolute left-16 top-3 bg-blue-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {menu.name}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
