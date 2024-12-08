import React, { useEffect, useState } from "react";
import { Boxes } from "../ui/background-boxes";
import ClassRoom from "../images/view-3d-school-desk.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomizedAccordions from "../Accordion/Accordion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./classroom.css";

export const courses = [
  {
    name: "Full Stack Web Development",
    id: "01",
    duration: "10hrs 30 mins",
    description: "",
  },
  {
    name: "Data Science with Python",
    id: "02",
    duration: "15hrs 30 mins",
    description: "",
  },
  {
    name: "Data Structures in Java",
    id: "03",
    duration: "20hrs 30 mins",
    description: "",
  },
];

function Classroom() {
  const navigate = useNavigate();
  const [studentCourses, setStudentCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const studentId = localStorage.getItem("studentId");
    if (token) {
      const url = `https://codekerdos.in/api/auth/${studentId}/courses`;
      axios
        .get(url)
        .then((response) => {
          setStudentCourses([...response.data]);
        })
        .catch((error) => {
          console.error("error fetching student courses ", error);
        });
    }
  }, []);

  return (
    <>
      <div
        //  background: 'linear-gradient(to bottom, #2F99D3,#104191)'
        className="min-h-screen min-w-screen relative overflow-hidden bg-slate-900 flex flex-col "
      >
        <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Navbar />
        <div className="p-10 z-30 min-h-[92vh]">
          <h1 className="text-5xl text-white mb-4 font-sans font-bold italic">
            Your Courses
          </h1>
          <CustomizedAccordions studentCourses={studentCourses} />

          <div className="flex justify-center mt-5">
            <button className="courseBtn" onClick={() => navigate("/")}>
              Explore Our Other Courses 🚀
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Classroom;
