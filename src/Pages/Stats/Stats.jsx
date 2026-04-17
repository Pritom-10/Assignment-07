import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from 'react';
import { Timedecontext } from '../../context/Timedecontext';
const Stats = () => {
 
  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];
  return (
    <div className="w-10/12 flex my-10 mx-auto flex-col">
      <h2 className='font-bold text-3xl mb-5'>Frienship Analytics</h2>
      <div className="card bg-base-100 w-full shadow-sm mx-auto flex flex-col p-6 items-center">
        <h2 className='w-full text-left'>By Interaction Type</h2>
        <PieChart className='text-center'
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
          <Tooltip />
          
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;