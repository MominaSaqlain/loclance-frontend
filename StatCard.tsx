"use client";
import { ReactNode } from "react";

export default function StatCard({
  title,
  value,
  icon,
}: { title: string; value: number | string; icon: ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 flex items-center gap-3 shadow-md hover:shadow-xl transition">
      <div className="bg-indigo-600 p-3 rounded-lg">{icon}</div>
      <div>
        <div className="text-gray-400 text-sm">{title}</div>
        <div className="text-white text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}
