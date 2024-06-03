import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="relative min-h-screen md:flex">
      {/* Toggle Button for Small Screens */}
      <button
        className="md:hidden fixed bottom-4 z-50 bg-gray-300 p-2 rounded"
        onClick={toggleDrawer}
      >
        {isDrawerOpen ? "Close" : "Open"} Menu
      </button>

      {/* Sidebar / Drawer */}

      <div
        className={`fixed top-0 h-screen inset-y-0 left-0 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-2/12 transition-transform duration-300 ease-in-out bg-[#EAB0A2] p-4 md:p-12 z-40`}
      >
        <ul>
          <li className="text-xl font-semibold p-4 w-full">
            <Link to={"user-profile"}>User Profile</Link>
          </li>
          <li className="text-xl font-semibold p-4 w-full">
            <Link to={""}>All Products</Link>
          </li>
          <li className="text-xl font-semibold p-4 w-full">
            <Link to={"add-page"}>Add Product</Link>
          </li>
          <li className="text-xl font-semibold p-4 w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
