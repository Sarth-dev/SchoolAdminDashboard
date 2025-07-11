/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";
import { Pencil, Trash, X } from "lucide-react";

export default function AdminPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Admins state
  const [admins, setAdmins] = useState([
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Super Admin",
      lastLogin: "2025-07-10 09:30",
    },
    {
      name: "Bob Williams",
      email: "bob@example.com",
      role: "Content Manager",
      lastLogin: "2025-07-09 17:15",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<unknown | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const openAddModal = () => {
    setEditingAdmin(null);
    setFormData({ name: "", email: "", role: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (admin: any) => {
    setEditingAdmin(admin);
    setFormData({ name: admin.name, email: admin.email, role: admin.role });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingAdmin) {
      // Update existing admin
      setAdmins((prev) =>
        prev.map((admin) =>
          admin.email === editingAdmin ? { ...admin, ...formData } : admin
        )
      );
    } else {
      // Add new admin
      setAdmins((prev) => [
        ...prev,
        {
          ...formData,
          lastLogin: new Date().toISOString().slice(0, 16).replace("T", " "),
        },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (email: string) => {
    setAdmins((prev) => prev.filter((admin) => admin.email !== email));
  };

  return (
    <div className="flex h-screen text-gray-800 w-full bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

          {/* Admin Table */}
          <div className="bg-white rounded shadow p-4 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">Admin Users</h3>
            <table className="min-w-full border border-gray-300 rounded overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Name</th>
                  <th className="px-4 py-2 text-left border-b">Email</th>
                  <th className="px-4 py-2 text-left border-b">Role</th>
                  <th className="px-4 py-2 text-left border-b">Last Login</th>
                  <th className="px-4 py-2 text-left border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr
                    key={index}
                    className="border-b text-gray-800 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{admin.name}</td>
                    <td className="px-4 py-2">{admin.email}</td>
                    <td className="px-4 py-2">{admin.role}</td>
                    <td className="px-4 py-2">{admin.lastLogin}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => openEditModal(admin)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Pencil />
                      </button>
                      <button
                        onClick={() => handleDelete(admin.email)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actions Example */}
          <div className="mt-6 bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openAddModal}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Admin
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Manage Roles
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                View Logs
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-6 w-full max-w-md shadow relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <h3 className="text-xl font-bold mb-4">
              {editingAdmin ? "Edit Admin" : "Add Admin"}
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full border px-3 py-2 rounded"
                disabled={editingAdmin ? true : false}
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, role: e.target.value }))
                }
                className="w-full border px-3 py-2 rounded"
              />
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                {editingAdmin ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
