import { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  function handleChange(e) {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="section2">
      <h2>Practical Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />
          <input
            name="from"
            placeholder="From"
            value={experience.from}
            onChange={handleChange}
          />
          <input
            name="to"
            placeholder="To"
            value={experience.to}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>Duration:</strong> {experience.from} - {experience.to}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
