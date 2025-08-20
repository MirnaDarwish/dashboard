import { FaBell, FaUserCircle, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  const iconSize = 20; 

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-8 py-4 sticky top-0 z-10">
      
      <div className="flex items-center space-x-3">
        <FaLaptop size={iconSize + 4} className="text-blue-500" />
        <span className="text-lg font-bold text-blue-800">TechDash</span>
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative hover:text-blue-500 transition">
          <FaBell size={iconSize} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="hover:scale-110 transition-transform">
          <FaUserCircle size={iconSize} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
