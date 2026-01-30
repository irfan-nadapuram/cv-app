import { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="section1">
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Title of Study"
            value={education.title}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={education.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Study:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
