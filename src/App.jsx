import { useState, useEffect } from "react";
import SplashScreen from "./components/ui/SplashScreen";
import Dashboard from "./pages/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Dashboard />;
}

export default App;
