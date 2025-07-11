"use client";

import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";
import { Bell, CheckCircle, AlertCircle, Clock } from "lucide-react";

export default function TimelinePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [timeline] = useState([
    {
      icon: <Bell className="w-5 h-5 text-blue-600" />,
      title: "New Teacher Added",
      message: "Sarah Smith has been added as a Dance Coach.",
      time: "2 hours ago",
      type: "info",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      title: "Payment Received",
      message: "Payment for invoice #1234 has been successfully processed.",
      time: "Yesterday",
      type: "success",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      title: "System Alert",
      message: "Server maintenance scheduled for tonight at 11 PM.",
      time: "2 days ago",
      type: "alert",
    },
    {
      icon: <Clock className="w-5 h-5 text-yellow-500" />,
      title: "Lesson Scheduled",
      message: "Music lesson with John Doe scheduled for Friday.",
      time: "3 days ago",
      type: "schedule",
    },
  ]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Notifications & Timeline</h2>

          <div className="bg-white rounded shadow p-6">
            <ul className="space-y-6">
              {timeline.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.message}</p>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
