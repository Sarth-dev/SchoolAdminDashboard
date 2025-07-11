"use client";

import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";

export default function SchedulePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handlers to toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Schedule slots state
  const [slots, setSlots] = useState<
    { date: string; start: string; end: string }[]
  >([]);

  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const addSlot = () => {
    if (!date || !start || !end) return;
    setSlots([...slots, { date, start, end }]);
    setDate("");
    setStart("");
    setEnd("");
  };

  const removeSlot = (index: number) => {
    setSlots(slots.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto text-gray-800 p-6">
          <h2 className="text-2xl font-bold mb-4">Teacher Schedule</h2>

          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Add Time Slot</h3>
            <div className="flex flex-wrap gap-4">
              <input
                type="date"
                className="border px-3 py-2 rounded"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="border px-3 py-2 rounded"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
              <input
                type="time"
                className="border px-3 py-2 rounded"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
              <button
                onClick={addSlot}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Slot
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Scheduled Slots</h3>

            {slots.length === 0 ? (
              <p className="text-gray-500">No slots scheduled yet.</p>
            ) : (
              <table className="min-w-full border border-gray-300 rounded overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b">
                      Date
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b">
                      Start Time
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b">
                      End Time
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slots.map((slot, idx) => (
                    <tr
                      key={idx}
                      className="border-b hover:bg-gray-50 text-gray-800"
                    >
                      <td className="px-4 py-2">{slot.date}</td>
                      <td className="px-4 py-2">{slot.start}</td>
                      <td className="px-4 py-2">{slot.end}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => removeSlot(idx)}
                          className="text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
