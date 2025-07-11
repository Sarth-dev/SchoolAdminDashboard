"use client";
import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [teachers] = useState([
    {
      name: "Ali Khan",
      role: "Teacher",
      birthDate: "1990-01-01",
      email: "alikhan@gmail.com",
      phone: "+91 5664890578",
      address: "Mondha naka , Satara",
    },
    {
      name: "Jitesh satpute",
      role: "Music Instructor",
      birthDate: "1985-05-20",
      email: "jiteshsatpute@gmail.com",
      phone: "+91 4161234567",
      address: "12/3 Kranti chowk , Chhatrapatri Sambhajinagar",
    },
    {
      name: "Sara Khanna",
      role: "Dance Coach",
      birthDate: "1992-09-15",
      email: "sarakhanna@gmail.com",
      phone: "+91 8416987654",
      address: "Panchvati,Nashik",
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
                {teachers.map((teacher, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 text-gray-800"
                  >
                    <td className="px-4 py-2">{teacher.name}</td>
                    <td className="px-4 py-2">{teacher.role}</td>
                    <td className="px-4 py-2">{teacher.birthDate}</td>
                    <td className="px-4 py-2">{teacher.email}</td>
                    <td className="px-4 py-2">{teacher.phone}</td>
                    <td className="px-4 py-2 whitespace-pre-line">
                      {teacher.address}
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
