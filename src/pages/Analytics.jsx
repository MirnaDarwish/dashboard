import { FaUsers, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function Analytics() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaUsers size={40} className="text-blue-500 mb-3" />
        <h3 className="text-lg font-bold">Users</h3>
        <p className="text-gray-500">1,245 active users</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaShoppingCart size={40} className="text-green-500 mb-3" />
        <h3 className="text-lg font-bold">Sales</h3>
        <p className="text-gray-500">348 orders this month</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaChartLine size={40} className="text-purple-500 mb-3" />
        <h3 className="text-lg font-bold">Growth</h3>
        <p className="text-gray-500">+23% compared to last month</p>
      </div>
    </div>
  );
}
