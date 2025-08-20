
import { FaLaptop, FaMobileAlt, FaHeadphones, FaTv } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="bg-techdash full-screen">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaLaptop size={40} className="text-blue-500 mb-3" />
        <h3 className="text-lg font-bold">Laptop</h3>
        <p className="text-gray-500">High performance laptops for work & gaming.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaMobileAlt size={40} className="text-green-500 mb-3" />
        <h3 className="text-lg font-bold">Smartphone</h3>
        <p className="text-gray-500">Latest smartphones with modern design.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaHeadphones size={40} className="text-purple-500 mb-3" />
        <h3 className="text-lg font-bold">Headphones</h3>
        <p className="text-gray-500">Noise-cancelling headphones for music lovers.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaTv size={40} className="text-red-500 mb-3" />
        <h3 className="text-lg font-bold">Monitor</h3>
        <p className="text-gray-500">4K and ultra-wide monitors for work and play.</p>
      </div>
    </div>
  );
}
