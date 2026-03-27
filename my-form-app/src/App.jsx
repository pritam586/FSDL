import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.age) newErrors.age = "Age is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    if (validate()) {
      setSuccess(true);
      setForm({ name: "", email: "", age: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>🚀 Interactive Form</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={form.age}
          onChange={handleChange}
          className={errors.age ? "error" : ""}
        />
        {errors.age && <p className="error-text">{errors.age}</p>}

        <button type="submit">Submit</button>

        {success && (
          <p className="success">✅ Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}

export default App;