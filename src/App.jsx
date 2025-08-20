import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="flex h-screen">
          <Sidebar setActivePage={setActivePage} />
          <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
            <Navbar />
            <main className="flex-1 p-6">
              {activePage === "Dashboard" && <Dashboard />}
              {activePage === "Analytics" && <Analytics />}
              {activePage === "Settings" && <Settings />}
            </main>
          </div>
        </div>
      )}
    </>
  );
}
