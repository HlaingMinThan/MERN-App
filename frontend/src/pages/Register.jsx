import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  let { name, email, password, password2 } = formData;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <h1 className="heading">
            <FaUser /> Register Here
            <p>Create account for free</p>
          </h1>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="confirm password"
              name="password2"
              value={password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Register Now</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
