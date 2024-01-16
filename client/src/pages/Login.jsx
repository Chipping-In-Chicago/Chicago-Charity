import "./css/Login.scss";
import { useState } from "react";
import Auth from '../utils/auth';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  //Form Data
  const [formData, setFormData] = useState({ email: '', password: '' });
  // const [isValid, setIsValid] = useState(true);
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log('form data', formData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('form data in submit', formData);
    // // Verifying Email Address
    // const inputEmail = formData.email;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const validEmail = emailRegex.test(inputEmail);
    // setIsValid(validEmail);
    // //Clearing Fields

    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      console.log('login data', data)

      Auth.login(data.loginUser.token);

    } catch (err) {
      console.error(err);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="labelEdit">E-Mail:</label>
            <input
              id="email-input"
              type="text"
              placeholder="Enter your E-Mail"
              onChange={handleInputChange}
              value={formData.email}
              required
            ></input>
            {/* {isValid ? null : <p>Enter a valid email address.</p>} */}
          </div>
          <div>
            <label className="labelEdit">Password:</label>
            <input
              id='password-input'
              type='text'
              placeholder="Enter your Password"
              onChange={handleInputChange}
              value={formData.password}
              required
            >
            </input>
          </div>
          <button type="submit">Login In</button>
        </form>
      )}
      {error && (<div>{error.message}</div>)}
    </main>
  );
};

export default Login;