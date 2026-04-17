import React from 'react';
import { Legend, Pie, PieChart } from "recharts";
const Stats = () => {
  const data = [
   
  ];
  return (
    <div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          
          cornerRadius="50%"
          fill="#8884d8"
        
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Stats;