"use client";
type Activity = { user: string; action: string; time: string };

export default function ActivityFeed({ items }: { items: Activity[] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md">
      <div className="text-gray-400 mb-2">Recent Activity</div>
      <ul className="space-y-3">
        {items.map((a,i)=>(
          <li key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full grid place-items-center text-white text-sm">
              {a.user[0]}
            </div>
            <div className="text-gray-300 text-sm">
              <span className="text-white font-semibold">{a.user}</span> {a.action}
              <div className="text-gray-500 text-xs mt-1">{a.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
