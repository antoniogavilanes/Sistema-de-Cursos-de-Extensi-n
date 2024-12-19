import React from "react";

function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p>No hay cursos disponibles.</p>;
  }

  return (
    <ul>
      {courses.map((course) => (
        <li key={course._id}>{course.title}</li>
      ))}
    </ul>
  );
}

export default CourseList;
