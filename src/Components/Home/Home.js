import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Style.css";

const Home = ({ allQuiz }) => {
  const navigate = useNavigate();

  return (
    <div className="px-2 md:px-6 lg:px-12 mx-auto max-w-screen-2xl mt-12 z-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  justify-center items-center">
        {allQuiz?.map((quiz, index) => (
          <div
            key={index}
            className="card  card-compact bg-zinc-200/50 rounded-none shadow-2xl hover:scale-105 duration-500"
          >
            <figure>
              <img src={quiz?.logo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{quiz?.name}</h2>

              <div className="  mt-4">
                <div className="flex justify-between items-center gap-x-6">
                  <p>Question: {quiz?.total}</p>
                  <button
                    onClick={() => navigate(`/home/${quiz?.id}`)}
                    className=""
                  >
                    <p className="flex justify-start gap-x-2  items-center text-lg border-b-2 border-transparent hover:border-b-2 hover:border-[#16CCBC] duration-500 delay-75 hover:translate-y-1">
                      <span className="">Start Quiz</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
