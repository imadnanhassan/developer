import { Outlet } from "react-router-dom";
import Navbar from "../section/Common/Navbar";
import Footer from "../section/Common/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen !bg-[#131313]">
      <>
        <Navbar />

        <main className=" w-full">
          <Outlet />
        </main>

        <Footer />
      </>
    </div>
  );
};

export default RootLayout;
