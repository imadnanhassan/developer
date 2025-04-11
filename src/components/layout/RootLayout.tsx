import { Outlet } from "react-router-dom";
import Navbar from "../section/Common/Navbar";
import Footer from "../section/Common/Footer";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";
import { useState, useEffect } from "react";
import Loader from "../ui/Loader";

const RootLayout: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 6000);
  }, []);

  return (
    <div className="w-full min-h-screen !bg-[#131313]">
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="w-full">
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
