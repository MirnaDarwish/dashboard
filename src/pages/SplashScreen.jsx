import { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish(); 
          return 100;
        }
        return prev + 1;
      });
    }, 30); 
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-700 to-blue-400 text-white">
      
      
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white rounded-full p-4 mb-4 shadow-lg" style={{ animation: 'subtle-bounce 1s infinite' }}>
          <FaLaptop size={48} className="text-blue-700" />
        </div>
        <span className="text-3xl font-bold">TechDash</span>
      </div>

      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <style>
        {`
          @keyframes subtle-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
}
