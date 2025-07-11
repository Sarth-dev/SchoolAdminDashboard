"use client";
import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [Students] = useState([
  {
    name: "Aarav Mehta",
    grade: "10",
    birthDate: "2008-03-12",
    email: "aarav.mehta@example.com",
    phone: "(987) 654-3210",
    address: "45 MG Road\nPune, Maharashtra\nIndia",
  },
  {
    name: "Priya Sharma",
    grade: "9",
    birthDate: "2009-07-25",
    email: "priya.sharma@example.com",
    phone: "(987) 123-4567",
    address: "12 FC Road\nPune, Maharashtra\nIndia",
  },
  {
    name: "Rohan Kulkarni",
    grade: "11",
    birthDate: "2007-11-05",
    email: "rohan.kulkarni@example.com",
    phone: "(987) 765-4321",
    address: "88 Baner Road\nPune, Maharashtra\nIndia",
  },
  {
    name: "Isha Patil",
    grade: "12",
    birthDate: "2006-02-18",
    email: "isha.patil@example.com",
    phone: "(987) 456-7890",
    address: "23 Kothrud\nPune, Maharashtra\nIndia",
  },
]);


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4">
          <div className="w-full overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full text-left border border-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 font-semibold border-b">Name</th>
                  <th className="px-4 py-2 font-semibold border-b">Role</th>
                  <th className="px-4 py-2 font-semibold border-b">Birth Date</th>
                  <th className="px-4 py-2 font-semibold border-b">Email</th>
                  <th className="px-4 py-2 font-semibold border-b">Phone</th>
                  <th className="px-4 py-2 font-semibold border-b">Address</th>
                </tr>
              </thead>
              <tbody>
                {Students.map((students, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 text-gray-800"
                  >
                    <td className="px-4 py-2">{students.name}</td>
                    <td className="px-4 py-2">{students.grade}</td>
                    <td className="px-4 py-2">{students.birthDate}</td>
                    <td className="px-4 py-2">{students.email}</td>
                    <td className="px-4 py-2">{students.phone}</td>
                    <td className="px-4 py-2 whitespace-pre-line">
                      {students.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
