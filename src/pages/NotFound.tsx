import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C9F31C]/10 to-[#1fc3ff]/10 blur-3xl"></div>

      <h1 className="text-7xl md:text-9xl font-bold text-white/10 relative z-10">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-4 z-10">
        Oops! Page not found.
      </p>
      <p className="text-white/60 mb-8 z-10 max-w-md">
        The page you’re looking for doesn’t exist. Maybe it took a coffee break
        ☕ or got lost in the code jungle 🌴.
      </p>

      <Link to="/" className="z-10">
        <button className="relative cursor-pointer px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium shadow-md hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#C9F31C] before:to-[#1fc3ff] before:opacity-20 before:blur-md">
          <div className="relative z-10 flex items-center gap-2">
            <Sparkles size={18} />
            <span>Back to Home</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
