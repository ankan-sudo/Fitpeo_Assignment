import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 4300 },
  { name: '23', uv: 2100 },
  { name: '25', uv: 2300 },
  { name: '27', uv: 2400 },
];

const ActivityChart = () => {
  return (
    <div className="bg-gray-900 text-white rounded-xl h-64 p-4 w-full mb-3 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Activity</h2>
        <select className="bg-gray-700 text-white rounded-md border-2 px-2 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Quarterly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%" className="pb-6">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="name" stroke="#A0AEC0" />
          <YAxis stroke="#A0AEC0" />
          <Tooltip />
          <Bar dataKey="uv" fill="#63B3ED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
