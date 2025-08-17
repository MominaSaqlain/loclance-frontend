"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md">
      <div className="text-gray-400 mb-2">Revenue (last 7 days)</div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#8884d8" tick={{ fill: '#ccc' }}/>
            <YAxis stroke="#8884d8" tick={{ fill: '#ccc' }}/>
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} itemStyle={{ color: '#fff' }}/>
            <Area type="monotone" dataKey="value" stroke="#6366f1" fill="url(#revenueGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
