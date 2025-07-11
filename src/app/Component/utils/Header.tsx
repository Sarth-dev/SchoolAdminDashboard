"use client";

import Image from "next/image";
import { Mail, Menu } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-fit bg-red-600 border-b p-2 border-gray-200 text-gray-900 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden"
          aria-label="Open Sidebar"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg md:text-xl text-gray-100 font-semibold">Teacher Profile</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <Mail className="w-5 h-5 text-gray-100" />
        <span className="text-sm md:text-base text-gray-100">User</span>
        <Image
          className="rounded-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User profile picture"
          width={25}
          height={25}
        />
      </div>
    </header>
  );
}
