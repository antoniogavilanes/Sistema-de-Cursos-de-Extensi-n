import React from "react";

function CourseList({ courses }) {
  return (
    <div>
      <h3>Listado de Cursos</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
