"use client";

import { useState } from "react";
import { Pencil, Check, X, Plus } from "lucide-react";

export default function TeacherDetails() {
  // States for personal details
  const [name, setName] = useState("Alexa Desouza");
  const [role, setRole] = useState("Teacher");
  const [birthDate, setBirthDate] = useState("1990-01-01");

  const [email, setEmail] = useState("alyinaallan@gmail.com");
  const [phone, setPhone] = useState("+91 8346489057");
  const [address, setAddress] = useState(
    "7/12 Juhu Beach,Sakinaka,Mumbai"
  );

  // Temp states for editing
  const [tempName, setTempName] = useState(name);
  const [tempRole, setTempRole] = useState(role);
  const [tempBirthDate, setTempBirthDate] = useState(birthDate);

  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhone, setTempPhone] = useState(phone);
  const [tempAddress, setTempAddress] = useState(address);

  // Edit toggles
  const [editDetails, setEditDetails] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  // Save handlers
  const saveDetails = () => {
    setName(tempName);
    setRole(tempRole);
    setBirthDate(tempBirthDate);
    setEditDetails(false);
  };

  const saveEmail = () => {
    setEmail(tempEmail);
    setEditEmail(false);
  };

  const savePhone = () => {
    setPhone(tempPhone);
    setEditPhone(false);
  };

  const saveAddress = () => {
    setAddress(tempAddress);
    setEditAddress(false);
  };

  // Private Qualifications
  const [qualifications, setQualifications] = useState([
    { name: "Vocal Contemporary", rate: 38 },
    { name: "Vocal Core", rate: 38 },
    { name: "Vocal Hybrid", rate: 38 },
    { name: "Vocal Plus", rate: 38 },
    { name: "Instrument", rate: 38 },
  ]);

  const addPrivateQualification = () => {
    setQualifications([
      ...qualifications,
      { name: "New Qualification", rate: 0 },
    ]);
  };

  // Group Qualifications
  const [TeacherDetails, setGroupQualifications] = useState([
    { name: "Vocal Contemporary", rate: 38 },
  ]);

  const addGroupQualification = () => {
    setGroupQualifications([
      ...TeacherDetails,
      { name: "New Group Qualification", rate: 0 },
    ]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 text-gray-800 mb-4">
      {/* Left: Details & Qualifications */}
      <div className="flex-1 space-y-4">
        {/* Details */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Details</h2>
            {editDetails ? (
              <div className="flex gap-2">
                <button onClick={saveDetails}>
                  <Check className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => {
                    setEditDetails(false);
                    setTempName(name);
                    setTempRole(role);
                    setTempBirthDate(birthDate);
                  }}
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ) : (
              <button onClick={() => setEditDetails(true)}>
                <Pencil className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
          <div className="space-y-1">
            <p>
              <strong>Name:</strong>{" "}
              {editDetails ? (
                <input
                  className="border px-2 py-1 rounded w-full"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                />
              ) : (
                name
              )}
            </p>
            <p>
              <strong>Role:</strong>{" "}
              {editDetails ? (
                <input
                  className="border px-2 py-1 rounded w-full"
                  value={tempRole}
                  onChange={(e) => setTempRole(e.target.value)}
                />
              ) : (
                role
              )}
            </p>
            <p>
              <strong>Birth Date:</strong>{" "}
              {editDetails ? (
                <input
                  type="date"
                  className="border px-2 py-1 rounded w-full"
                  value={tempBirthDate}
                  onChange={(e) => setTempBirthDate(e.target.value)}
                />
              ) : (
                birthDate
              )}
            </p>
          </div>
        </div>

        {/* Private Qualifications */}
        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Private Qualifications</h2>
            <button
              onClick={addPrivateQualification}
              className="p-1 rounded hover:bg-gray-100"
              title="Add Private Qualification"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <table className="min-w-full text-left border-none">
            <thead className="border-none">
              <tr>
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Rate (₹/hr)</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((q, idx) => (
                <tr key={idx} className="border-none">
                  <td className="px-4 py-2">{q.name}</td>
                  <td className="px-4 py-2">₹{q.rate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Group Qualifications */}
        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Group Qualifications</h2>
            <button
              onClick={addGroupQualification}
              className="p-1 rounded hover:bg-gray-100"
              title="Add Group Qualification"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <table className="min-w-full text-left border-0">
            <thead className="border-none">
              <tr>
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Rate (₹/hr)</th>
              </tr>
            </thead>
            <tbody>
              {TeacherDetails.length > 0 ? (
                TeacherDetails.map((gq, idx) => (
                  <tr key={idx} className="border-0">
                    <td className="px-4 py-2">{gq.name}</td>
                    <td className="px-4 py-2">₹{gq.rate.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 text-gray-500">
                    No data available
                  </td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Email, Phone, Address */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Email */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Email</h2>
            {editEmail ? (
              <div className="flex gap-2">
                <button onClick={saveEmail}>
                  <Check className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => {
                    setEditEmail(false);
                    setTempEmail(email);
                  }}
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ) : (
              <button onClick={() => setEditEmail(true)}>
                <Pencil className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
          <p>
            <strong>Work:</strong>{" "}
            {editEmail ? (
              <input
                className="border px-2 py-1 rounded w-full"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
              />
            ) : (
              email
            )}
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Phone</h2>
            {editPhone ? (
              <div className="flex gap-2">
                <button onClick={savePhone}>
                  <Check className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => {
                    setEditPhone(false);
                    setTempPhone(phone);
                  }}
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ) : (
              <button onClick={() => setEditPhone(true)}>
                <Pencil className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
          <p>
            <strong>Home:</strong>{" "}
            {editPhone ? (
              <input
                className="border px-2 py-1 rounded w-full"
                value={tempPhone}
                onChange={(e) => setTempPhone(e.target.value)}
              />
            ) : (
              phone
            )}
          </p>
        </div>

        {/* Address */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Addresses</h2>
            {editAddress ? (
              <div className="flex gap-2">
                <button onClick={saveAddress}>
                  <Check className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => {
                    setEditAddress(false);
                    setTempAddress(address);
                  }}
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ) : (
              <button onClick={() => setEditAddress(true)}>
                <Pencil className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
          <p>
            <strong>Home:</strong>{" "}
            {editAddress ? (
              <textarea
                className="border px-2 py-1 rounded w-full"
                rows={3}
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
              />
            ) : (
              address.split("\n").map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
