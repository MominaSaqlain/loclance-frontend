"use client";

import { PlusCircle, Phone, MessageSquare, Calendar } from "lucide-react";

export default function QuickActions({
  reminders,
}: {
  reminders: { title: string; due: string }[];
}) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <div className="font-medium mb-3">Quick Actions</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="px-3 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <PlusCircle size={18} /> New Proposal
          </button>
          <button className="px-3 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <Phone size={18} /> Call Script
          </button>
          <button className="px-3 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <MessageSquare size={18} /> Send WhatsApp
          </button>
          <button className="px-3 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2">
            <Calendar size={18} /> Schedule Follow-up
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <div className="font-medium mb-3">Reminders (Today)</div>
        <ul className="space-y-2">
          {reminders.map((r, i) => (
            <li key={i} className="flex items-center justify-between">
              <span className="text-sm">{r.title}</span>
              <span className="text-xs text-gray-500">{r.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
