import { EditIcon, SearchIcon, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PortfolioClientLogo: React.FC = () => {
  return (
    <div className="adnan_container mx-auto">
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="flex items-center justify-between mb-4">
              <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                  <SearchIcon className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="default-search"
                  className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Search for company"
                />
              </div>
              <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                <button>
                  <div className="flex items-center justify-center w-11 h-11 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out">
                    <Link to="/admin/clients/add">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </Link>
                  </div>
                </button>
              </div>
            </div>

            <div className="overflow-hidden ">
              <table className=" min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Website URL
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                      Louis Vuitton
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                      <a
                        href="https://www.louisvuitton.com"
                        className="text-indigo-500 hover:text-indigo-600"
                      >
                        https://www.louisvuitton.com
                      </a>
                    </td>

                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      <img
                        src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--louis-vuitton-monogram-giant-hooded-sweatshirt--M1A0W2X4E3E2.jpg?wid=600&hei=600&fmt=jpeg"
                        alt="Louis Vuitton"
                        className="w-16 h-16 rounded-full"
                      />
                    </td>
                    <td className=" p-5 ">
                      <div className="flex items-center gap-1">
                        <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                          <EditIcon className="text-indigo-500" />
                        </button>
                        <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                          <Trash className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioClientLogo;
