import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Dashboard = ({ allQuiz }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-12 mt-12 justify-center items-center flex h-[80vh]">
      <BarChart width={600} height={300} data={allQuiz}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Dashboard;
