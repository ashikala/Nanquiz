import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState({});
  const [ans, setAns] = useState(false);
  const [ind, setIndex] = useState();
  const [obj, setObj] = useState("");
  const [dataId, setId] = useState();
  const [rightAns, setCurrectAns] = useState([]);
  const [queryAns, setHandleQueryAns] = useState("");

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
      .then((res) => res.json())
      .then((data) => setQuiz(data.data));
  }, []);

  const handleAns = (question, id, index) => {
    const correctAns = quiz?.questions?.filter((q) => q.id === id);
    const right = correctAns[0].correctAnswer === question;

    setAns(correctAns[0].correctAnswer === question);
    setIndex(index);
    setObj(question);
    setId(id);

    if (right) {
      // sum = sum + 1;
      setCurrectAns([...rightAns, correctAns]);
    }
  };
  console.log(rightAns);

  return (
    <div className="px-2 md:px-6 lg:px-12 max-w-screen-2xl mx-auto mt-12">
      <h2 className="text-center text-2xl"> Quiz of {quiz?.name}</h2>
      <div className="mt-6">
        <h2 className="bg-pink-300 px-6 py-2 w-60">
          Correct Ans : ${rightAns.length}
        </h2>
        <div className="lg:w-3/6 w-full mx-auto">
          {quiz?.questions?.map((question, index) => (
            <div className="shadow-xl p-6 mt-12 flex justify-start flex-col items-center">
              <div className="flex justify-start gap-x-1 items-start text-lg font-semibold">
                <h2 className=" ">Q:{index + 1} </h2>
                <div className="flex gap-x-4 justify-between">
                  <p className=" w-full">{question?.question} ?</p>
                  <button
                    onClick={() => setHandleQueryAns(question?.correctAnswer)}
                    className=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <hr />

              <div className="mt-2">
                {question.options.map((op, index) => (
                  <button
                    disabled={question.id === dataId}
                    onClick={() => handleAns(op, question.id, index)}
                    className={`px-6 py-2 shadow-md mt-4 cursor-pointer w-full ${
                      ans
                        ? index === ind
                          ? obj === op
                            ? "bg-green-400"
                            : ""
                          : ""
                        : index === ind
                        ? obj === op
                          ? "bg-red-300"
                          : ""
                        : queryAns === op
                        ? "bg-green-500"
                        : ""
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsQuiz;
