import React from "react";
import Home from "./Home";
import'../Style/Style.css'

const HomePage = ({ allQuiz }) => {
  return (
    <div className="px-2 md:px-6 lg:px-12 mx-auto max-w-screen-2xl flex flex-col z-40 justify-center items-center mt-12">
      <div className="Heading">
        <h2 className="text-white">Check Your Development Knowledge!!</h2>
      </div>
      <Home allQuiz={allQuiz} />
    </div>
  );
};

export default HomePage;
