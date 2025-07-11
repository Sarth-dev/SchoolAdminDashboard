"use client";

import { useState } from "react";
import {
  Line,
  Bar,
  Pie,
  Doughnut,
  Radar,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

const tabs = [
  "Availability",
  "Unavailabilities",
  "Students",
  "Schedule",
  "Invoiced Lessons",
  "Unscheduled Lessons",
  "Time Voucher",
  "Comments",
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("Availability");

  // Charts for each section
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Hours Available",
        data: [5, 6, 4, 7, 5],
        borderColor: "rgba(59, 130, 246, 1)", // blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Lessons Invoiced",
        data: [12, 19, 7, 14],
        backgroundColor: "rgba(16, 185, 129, 0.7)", // emerald-500
      },
    ],
  };

  const pieData = {
    labels: ["Available", "Unavailable"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#3B82F6", "#EF4444"], // blue & red
      },
    ],
  };

  const doughnutData = {
    labels: ["Active Students", "Inactive Students"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#10B981", "#FBBF24"], // green & yellow
      },
    ],
  };

  const scheduleData = {
    labels: ["Morning", "Afternoon", "Evening"],
    datasets: [
      {
        label: "Classes Scheduled",
        data: [10, 15, 8],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
      },
    ],
  };

  const unscheduledData = {
    labels: ["Pending", "Cancelled", "Rescheduled"],
    datasets: [
      {
        label: "Unscheduled Lessons",
        data: [5, 2, 3],
        backgroundColor: ["#EF4444", "#F59E0B", "#6366F1"],
      },
    ],
  };

  const voucherData = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#10B981", "#E5E7EB"], // green & gray
      },
    ],
  };

  const radarData = {
    labels: ["Communication", "Punctuality", "Preparation", "Feedback"],
    datasets: [
      {
        label: "Teacher Comments",
        data: [4, 5, 4, 3],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3B82F6",
      },
    ],
  };

  return (
    <section className="bg-white text-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Teacher Schedule</h2>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="h-96 bg-gray-100 flex items-center justify-center text-gray-500 rounded w-full p-4">
        {activeTab === "Availability" && (
          <Line data={lineData} options={{ responsive: true }} />
        )}

        {activeTab === "Unavailabilities" && (
          <Pie data={pieData} options={{ responsive: true }} />
        )}

        {activeTab === "Students" && (
          <Doughnut data={doughnutData} options={{ responsive: true }} />
        )}

        {activeTab === "Schedule" && (
          <Bar data={scheduleData} options={{ responsive: true }} />
        )}

        {activeTab === "Invoiced Lessons" && (
          <Bar data={barData} options={{ responsive: true }} />
        )}

        {activeTab === "Unscheduled Lessons" && (
          <Bar data={unscheduledData} options={{ responsive: true }} />
        )}

        {activeTab === "Time Voucher" && (
          <Pie data={voucherData} options={{ responsive: true }} />
        )}

        {activeTab === "Comments" && (
          <Radar data={radarData} options={{ responsive: true }} />
        )}
      </div>
    </section>
  );
}
