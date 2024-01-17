import { Link } from "react-router-dom";
import "./css/Signup.scss";
import { useState } from "react";

export default function Signup() {
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
          <label>E-Mail:</label>
          <input
            id="email-input"
            type="text"
            value={formData.email}
            placeholder="Enter your E-Mail"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></input>
          {isValid ? null : <p>Enter email address.</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
          id='password-input'
          type='text'
          placeholder="Enter a Password"
          value = {formData.password}
          required
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          >
          </input>
        </div>
        <button onClick={handleSubmit}>Sign up and help out!</button>
      <Link to = '/login'>Or Click here to login</Link>
      </form>
      
    </>
  );
}
