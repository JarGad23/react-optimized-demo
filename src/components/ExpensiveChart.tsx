import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  name: string;
  value: number;
};

export const ExpensiveChart = React.memo(() => {
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const [currentBatch, setCurrentBatch] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const BATCH_SIZE = 20;
    const TOTAL_POINTS = 2000;
    const totalBatches = Math.ceil(TOTAL_POINTS / BATCH_SIZE);

    function generateBatch(batchIndex: number) {
      if (cancelled || batchIndex >= totalBatches) {
        setIsGenerating(false);
        return;
      }

      requestIdleCallback(
        (deadline) => {
          const batchData: DataPoint[] = [];
          const startIdx = batchIndex * BATCH_SIZE;
          const endIdx = Math.min(startIdx + BATCH_SIZE, TOTAL_POINTS);

          for (
            let i = startIdx;
            i < endIdx && deadline.timeRemaining() > 5;
            i++
          ) {
            batchData.push({
              name: `Point ${i}`,
              value: Math.sin(i / 5) * 50 + 50 + Math.random() * 10,
            });
          }

          if (batchData.length > 0) {
            setChartData((prev) => [...prev, ...batchData]);
            setCurrentBatch(batchIndex + 1);
          }

          generateBatch(batchIndex + 1);
        },
        { timeout: 100 }
      );
    }

    generateBatch(0);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full h-[500px]">
      <div className="flex items-center gap-2 pl-4 mb-2">
        <h2 className="text-xl font-bold">Non-Blocking Chart</h2>
        {isGenerating && (
          <span className="text-sm text-blue-600">
            Loading: {currentBatch * 10}/{200} points
          </span>
        )}
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            dot={false}
            // isAnimationActive={false}
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

// function generateExpensiveChartData() {
//   // Heavy computation simulation
//   const data = [];
//   for (let i = 0; i < 10000; i++) {
//     data.push({
//       name: `Point ${i}`,
//       value: Math.sin(i / 10) * 50 + 50 + Math.random() * 10,
//     });
//   }
//   return data;
// }
