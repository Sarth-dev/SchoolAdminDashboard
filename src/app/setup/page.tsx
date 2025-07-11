"use client";

import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";

export default function SetupPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col md:flex-row h-screen text-gray-800 w-full bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Setup & Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* School Details */}
            <section className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-4">School Details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">School Name</label>
                  <input
                    type="text"
                    placeholder="Enter school name"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <textarea
                    placeholder="Enter address"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Save Details
                </button>
              </form>
            </section>

            {/* Notification Settings */}
            <section className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
              <form className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" id="emailNotif" className="mr-2" />
                  <label htmlFor="emailNotif">Enable Email Notifications</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="smsNotif" className="mr-2" />
                  <label htmlFor="smsNotif">Enable SMS Alerts</label>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Save Preferences
                </button>
              </form>
            </section>

            {/* User Roles */}
            <section className="bg-white p-6 rounded shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Manage User Roles</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <input
                  type="text"
                  placeholder="Add new role"
                  className="flex-1 border px-3 py-2 rounded focus:outline-none focus:ring"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Add Role
                </button>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex justify-between items-center border p-3 rounded">
                  <span>Admin</span>
                  <button className="text-red-600 hover:underline">Remove</button>
                </li>
                <li className="flex justify-between items-center border p-3 rounded">
                  <span>Teacher</span>
                  <button className="text-red-600 hover:underline">Remove</button>
                </li>
                <li className="flex justify-between items-center border p-3 rounded">
                  <span>Student</span>
                  <button className="text-red-600 hover:underline">Remove</button>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
