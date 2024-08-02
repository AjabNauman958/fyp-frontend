import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../../Player/DashboardNavbar";
import WelcomeMessage from "./WelcomeMessage";
import TeamProfileDetails from "./TeamProfileDetails";
import Footer from "../Footer/Footer";

const MainDashboard = () => {
  return (
    <div>
      <ThemeContextProvider>
        <div className="flex">
          <Sidebar />
          <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
            <DashboardNavbar />
            <div className="mx-4 mt-4 flex-grow">
              <WelcomeMessage />
            </div>
            <div className="mt-9 flex justify-center">
              <div className="w-full max-w-5xl px-4">
                <TeamProfileDetails />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default MainDashboard;
