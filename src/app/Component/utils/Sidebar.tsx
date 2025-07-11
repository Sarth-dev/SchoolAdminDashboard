"use client";

import {
  BellDot,
  CalendarCheck2,
  House,
  Settings2,
  ShieldUser,
  UserRound,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  const pathname = usePathname();

  // helper to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}

      <aside
        className={`fixed md:static z-20 top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <div className="h-[3.3rem] flex bg-red-600 items-center justify-between px-4 font-bold border-b border-gray-700 md:justify-center">
          <span>SchoolAdmin</span>
          {/* Close button only on mobile */}
          <button onClick={closeSidebar} className="md:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <House />
            </i>
            Dashboard
          </Link>

          <Link
            href="/teachers"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/teachers") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <UserRound />
            </i>
            Teachers
          </Link>

          <Link
            href="/students"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/students") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <Users />
            </i>
            Students
          </Link>

          <Link
            href="/schedule"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700`}
          >
            <i>
              <CalendarCheck2 />
            </i>
            Schedule
          </Link>

          <Link
            href="/upi"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/upi") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <WalletCards />
            </i>
            Payment
          </Link>

          <Link
            href="/admin"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/admin") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <ShieldUser />
            </i>
            Admin
          </Link>

          <Link
            href="/setup"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/setup") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <Settings2 />
            </i>
            Setup
          </Link>

          <Link
            href="/timeline"
            className={`gap-5 py-2 flex px-4 rounded hover:bg-gray-700 ${
              isActive("/timeline") ? "border-l-4 border-amber-600 bg-gray-800" : ""
            }`}
          >
            <i>
              <BellDot />
            </i>
            Timeline
          </Link>
        </nav>
      </aside>
    </>
  );
}
