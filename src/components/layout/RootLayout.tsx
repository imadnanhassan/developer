import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

const RootLayout: React.FC = () => {
  return (
    <div className="w-full min-h-screen !bg-[#131313]">
      <>
        <Navbar />

        <main className=" w-full">
          <Outlet />
        </main>

        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2024 Your Company. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Terms of Service
                </a>
                <a
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default RootLayout;
