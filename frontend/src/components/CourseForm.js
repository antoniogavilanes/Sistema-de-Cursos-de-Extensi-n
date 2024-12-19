import React, { useState } from "react";
import axios from "axios";

function CourseForm({ onCourseCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/courses",
        { title, description },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setTitle("");
      setDescription("");
      onCourseCreated();
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear Curso</h3>
      <input
        type="text"
        placeholder="Título del curso"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción del curso"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Agregar Curso</button>
    </form>
  );
}

export default CourseForm;
