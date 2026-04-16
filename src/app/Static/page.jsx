"use client";

import { FriendApi } from "@/context/ContextApi";
import { useContext } from "react";
import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer,} from "recharts";


const COLORS = ["#00bc7d", "#6EE7D7", "#000"];

const Static = () => {
  
   
const {calls} = useContext(FriendApi)
const getCount = (type) =>
  calls?.filter(c => c.type === type).length || 0;
const data = [
  { name: "Calls", value: getCount('call') || 0 },
  { name: "Chats", value: getCount('chat') || 0 },
  { name: "Videos", value: getCount('video') || 0 },
  
];

  if (!calls || calls.length === 0) {
    return (
      <div className='flex flex-col justify-center w-10/12 m-auto items-center shadow h-60'>
        <h1 className='text-xl font-semibold'>No Static Found</h1>
        <p className="text-gray-500">Your timeline is empty right now</p>
      </div>
    )
  }
  return (
    <div className="w-10/12 mx-auto p-5">
         <h1 className="text-3xl font-bold mb-4">Statics</h1>
          <div style={{ width: "100%", height: 400 }} className="shadow rounded-2xl" >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Static;
