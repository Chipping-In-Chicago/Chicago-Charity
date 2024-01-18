import "./css/Login.scss";
import { useState } from "react";
import Auth from '../utils/auth';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  //Form Data
  const [formData, setFormData] = useState({ email: "", password: "" });
  // const [isValid, setIsValid] = useState(true);
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  console.log('form data', formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form data on submit', formData);
    // // Verifying Email Address
    // const inputEmail = formData.email;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const validEmail = emailRegex.test(inputEmail);
    // setIsValid(validEmail);

    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      console.log('login data', data)

      Auth.login(data.loginUser.token);

    } catch (err) {
      console.error(err);
    }

    //Clearing Fields
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    < >

      <form onSubmit={handleSubmit}>
        <div>
          <label className="labelEdit" htmlFor="email-input">E-Mail:</label>
          <input
            id="email-input"
            type="text"
            placeholder="Enter your E-Mail"
            value={formData.email}
            required
            // onChange={handleInputChange}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {/* {isValid ? null : <p>Enter a valid email address.</p>} */}
        </div>
        <div>
          <label className="labelEdit" htmlFor='password-input'>Password:</label>
          <input
            id='password-input'
            type='text'
            placeholder="Enter your Password"
            value={formData.password}
            required
            // onChange={handleInputChange}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && (<div>{error.message}</div>)}
    </>
  );
};

export default Login;