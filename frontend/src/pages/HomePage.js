import React, { useState, useEffect } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import axios from "axios";

function HomePage() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Gestión de Cursos</h1>
      <CourseForm onCourseCreated={fetchCourses} />
      <CourseList courses={courses} />
    </div>
  );
}

export default HomePage;
