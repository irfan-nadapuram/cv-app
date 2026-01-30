import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="section3">
      <h2>General Information</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
