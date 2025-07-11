"use client";
import { useState } from "react";
import Header from "../Component/utils/Header";
import Sidebar from "../Component/utils/Sidebar";
import { Loader2, CheckCircle } from "lucide-react";


interface UPIFormData {
  name: string;
  upiId: string;
  amount: number;
}

export default function Page() {
     const [formData, setFormData] = useState<UPIFormData>({
        name: "",
        upiId: "",
        amount: 0,
      });
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
      const [error, setError] = useState("");
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: name === "amount" ? parseFloat(value) : value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
    
        if (!formData.name || !formData.upiId || formData.amount <= 0) {
          setError("All fields are required and amount must be valid.");
          return;
        }
    
        setLoading(true);
        // Mock API request
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000);
      };
    
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
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
           <div className="max-w-md  text-gray-800 mx-auto bg-white p-6  rounded-lg shadow-md transition-all">
      <h2 className="text-2xl font-semibold mb-4">UPI Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">UPI ID</label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="example@upi"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount || ""}
            onChange={handleChange}
            placeholder="Amount in ₹"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 flex justify-center items-center"
        >
          {loading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            "Pay Now"
          )}
        </button>

        {success && (
          <div className="flex items-center gap-2 text-green-600 mt-2">
            <CheckCircle className="w-5 h-5" />
            Payment Successful!
          </div>
        )}
      </form>
    </div>
        </main>
      </div>
    </div>
  );
}
