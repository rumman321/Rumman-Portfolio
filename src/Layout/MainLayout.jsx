import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the modal when the app loads for the first time
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="md:w-10/12 mx-auto">
      <Navber />
      <div className="min-h-[calc(100vh-178px)]">
        <Outlet />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Welcome to My Portfolio!</h2>
            <p className="text-gray-600 mb-6">
            I’m currently working on it, so I couldn’t add many things yet. Stay tuned for updates!
            </p>
            <button
              onClick={handleCloseModal}
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
