import React, { useState } from "react";
import axios from "axios";

function CourseForm({ onCourseCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/courses", { title });
      setTitle("");
      onCourseCreated(); // Actualiza la lista de cursos
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del curso"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Crear Curso</button>
    </form>
  );
}

export default CourseForm;
