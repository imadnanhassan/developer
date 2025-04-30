import {
  useDeleteClientLogoMutation,
  useGetClientLogosQuery,
} from "@/redux/features/ClientLogo";
import { EditIcon, SearchIcon, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface ClientLogo {
  _id: string;
  name: string;
  image: string;
  link: string;
}

const PortfolioClientLogo: React.FC = () => {
  const { data } = useGetClientLogosQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const [deleteClientLogo, { isLoading: deleteLoading }] =
    useDeleteClientLogoMutation();

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this logo?"
    );
    if (!confirm) return;

    toast.loading("Deleting logo... please wait", { id: "delete-logo" });

    try {
      await deleteClientLogo(id).unwrap();
      toast.success("Logo deleted successfully!", { id: "delete-logo" });
    } catch (error: unknown) {
      toast.error("Failed to delete logo. Try again.", { id: "delete-logo" });
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

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
                <tbody className="divide-y divide-gray-300">
                  {(data as ClientLogo[])?.map((logo: ClientLogo) => (
                    <tr
                      key={logo._id}
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                    >
                      {/* Name */}
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {logo.name}
                      </td>

                      {/* Website Link */}
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <a
                          href={logo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-500 hover:text-indigo-600"
                        >
                          {logo.link}
                        </a>
                      </td>

                      {/* Image */}
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <img
                          src={logo.image}
                          alt={logo.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </td>

                      {/* Actions */}
                      <td className="p-5">
                        <div className="flex items-center gap-1">
                          <button className="p-2 rounded-full group transition-all duration-500 flex items-center">
                            <EditIcon className="text-indigo-500" />
                          </button>
                          <button
                            onClick={() => handleDelete(logo._id)}
                            disabled={deleteLoading}
                            aria-label="Delete"
                            className="p-2 rounded-full group transition-all duration-500 flex items-center cursor-pointer hover:bg-red-100 hover:text-red-500"
                          >
                            <Trash className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
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
