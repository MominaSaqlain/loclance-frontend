"use client";

const events = [
  { date: "2025-08-15", title: "Meeting with Ali" },
  { date: "2025-08-18", title: "Proposal Deadline" },
  { date: "2025-08-20", title: "Client Follow-up" },
];

export default function CalendarPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">🗓️ Calendar</h1>

      <div className="bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-lg text-white mb-4">Upcoming Events</h2>
        <ul className="space-y-3">
          {events.map((e, i) => (
            <li key={i} className="p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition">
              <p className="text-indigo-400 font-semibold">{e.date}</p>
              <p className="text-gray-200">{e.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <p className="text-gray-400">📅 (Yahan future me ek full calendar UI aa sakta hai, abhi events list hai)</p>
      </div>
    </div>
  );
}
