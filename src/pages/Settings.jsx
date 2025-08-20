import { FaUserCog, FaBell, FaLock } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaUserCog size={40} className="text-blue-500 mb-3" />
        <h3 className="text-lg font-bold">Profile</h3>
        <p className="text-gray-500">Update your name, email, and picture</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaBell size={40} className="text-green-500 mb-3" />
        <h3 className="text-lg font-bold">Notifications</h3>
        <p className="text-gray-500">Manage email & app notifications</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition">
        <FaLock size={40} className="text-red-500 mb-3" />
        <h3 className="text-lg font-bold">Security</h3>
        <p className="text-gray-500">Change password & enable 2FA</p>
      </div>
    </div>
  );
}
