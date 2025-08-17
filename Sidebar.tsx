"use client";
import Link from "next/link";
import { Home, Layers, Calendar, Settings, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menu = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/tasks", label: "Tasks", icon: Layers },
  { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-gray-300 flex flex-col">
      <div className="h-16 flex items-center justify-center text-white text-2xl font-bold border-b border-gray-700">
        Loclance
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menu.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition",
              path === href && "bg-gray-800 text-white"
            )}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 px-3 py-2 w-full hover:bg-gray-800 rounded-md">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
}
