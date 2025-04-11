import { Outlet } from "react-router-dom";
import Navbar from "../section/Common/Navbar";
import Footer from "../section/Common/Footer";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";
import { useState, useEffect } from "react";
import Loader from "../ui/Loader";

const RootLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="w-full min-h-screen !bg-[#131313]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className=" w-full">
            <Outlet />
          </main>
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default RootLayout;
