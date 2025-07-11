"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "./utils/Sidebar";
import Header from "./utils/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar: Pass state & handler */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

      <div className="flex flex-col">
        {/* Header: Pass toggle handler */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
