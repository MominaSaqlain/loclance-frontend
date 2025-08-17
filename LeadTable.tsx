"use client";

type Lead = {
  name: string;
  city: string;
  industry: string;
  status: "New" | "Contacted" | "Meeting" | "Won" | "Lost";
};

export default function LeadTable({ leads }: { leads: Lead[] }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-4 border-b font-medium">Recent Leads</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Industry</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-3 font-medium">{l.name}</td>
                <td className="px-4 py-3">{l.city}</td>
                <td className="px-4 py-3">{l.industry}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                    {l.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-indigo-600 hover:underline">Open</button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-400" colSpan={5}>
                  No leads yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
