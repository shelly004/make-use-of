import { useState } from "react";
export default function Form() {
  const [userData, setUserData] = useState([]);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (formData.name.trim() === "") {
      validationErrors["name"] = "Name is required";
    } else if (formData.name.length <= 3) {
      validationErrors.name = "Name should be at least 3 characters";
    }
    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please check the email";
    }
    if (formData.password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must contain uppercase, lowercase, number and special character";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length == 0) {
      setUserData([...userData, formData]);
      setFormData({ name: "", email: "", password: "" });
      alert("Form Submitted Successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="App">
      <h1>Form with Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors && <p>{errors.name}</p>}

          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            // onChange={(e) =>
            //   setFormData({ ...formData, email: e.target.value })
            // }
          />
          {errors && <p>{errors.email}</p>}
          <label htmlFor="password">Password </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            // onChange={(e) =>
            //   setFormData({ ...formData, password: e.target.value })
            // }
          />
          {errors && <p>{errors.password}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
