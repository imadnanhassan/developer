import { Outlet } from "react-router-dom";
import Navbar from "../section/Common/Navbar";
import Footer from "../section/Common/Footer";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";

const RootLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen !bg-[#131313]">
      <>
        <Navbar />

        <main className=" w-full">
          <Outlet />
        </main>

        <Footer />

        <ScrollToTopButton/>
      </>
    </div>
  );
};

export default RootLayout;
