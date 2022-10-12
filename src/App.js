import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import DetailsQuiz from "./Components/DetailsQuiz/DetailsQuiz";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import Blog from "./Components/Blog/Blog";
import NotAPage from "./Components/NotAPage/NotAPage";
import "../src/Components/Style/Style.css";

function App() {
  const [allQuiz, setAllQuiz] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setAllQuiz(data?.data));
  }, []);
  return (
    <div className=" ">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage allQuiz={allQuiz} />}/>
            <Route path="/home/:id" element={<DetailsQuiz />} />
            <Route path="/dashboard" element={<Dashboard allQuiz={allQuiz} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotAPage />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
