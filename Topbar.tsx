"use client";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-gray-850 shadow backdrop-blur-sm flex items-center px-6 z-10">
      <div className="relative flex-1 max-w-md">
        <Search size={20} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <button className="p-2 hover:bg-gray-800 rounded-md"><Bell size={20} /></button>
        <div className="w-9 h-9 bg-indigo-600 rounded-full grid place-items-center text-white font-semibold">U</div>
      </div>
    </header>
  );
}

