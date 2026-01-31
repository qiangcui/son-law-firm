import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Won/Settled', value: 98 },
  { name: 'Other', value: 2 },
];

// Updated to Harmonic Blue Palette
// Primary: #3b82f6 (Bright Royal Blue)
// Dark: #0f172a (Deep Slate Navy)
const COLORS = ['#3b82f6', '#0f172a'];

const StatsChart: React.FC = () => {
  return (
    <div className="h-64 w-full relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderColor: '#dbeafe', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#0f172a', fontFamily: 'Inter' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-bold text-navy-900">98%</span>
        <span className="text-xs text-gray-500 uppercase tracking-wide">Success Rate</span>
      </div>
    </div>
  );
};

export default StatsChart;