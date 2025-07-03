import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ExpensiveChart = React.memo(() => {
  const data = useMemo(() => generateExpensiveChartData(), []);

  return (
    <div className="w-full h-[500px]">
      <h2 className="pl-4 text-xl font-bold">Chart Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

function generateExpensiveChartData() {
  // Heavy computation simulation
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      name: `Point ${i}`,
      value: Math.sin(i / 10) * 50 + 50 + Math.random() * 10,
    });
  }
  return data;
}
