import { Link } from "react-router-dom";
import "./css/Login.scss";
import { useState } from "react";

export default function Login() {
  //Form Data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Verifying Email Address
    const inputEmail = formData.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(inputEmail);
    setIsValid(validEmail);
    //Clearing Fields
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="labelEdit">E-Mail:</label>
          <input
            id="email-input"
            type="text"
            value={formData.email}
            placeholder="Please enter a valid E-Mail address"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></input>
          {isValid ? null : <p>Enter a valid email address.</p>}
        </div>
        <div>
          <label className="labelEdit">Password:</label>
          <input
          id='password-input'
          type='text'
          value = {formData.password}
          required
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          >
          </input>
        </div>
      </form>
      <button onClick={handleSubmit}>Sign In</button>
    </>
  );
}
