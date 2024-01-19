import { Link } from "react-router-dom";
import "./css/Signup.scss";
import { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

export default function Signup() {
  //Form Data
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(data);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };
    
    // const [isValid, setIsValid] = useState(true);
    
    // Verifying Email Address
    // const inputEmail = formData.email;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const validEmail = emailRegex.test(inputEmail);
    // setIsValid(validEmail);
    //Clearing Fields

    // setFormData({
    //   email: "",
    //   password: "",
    // });

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>E-Mail:</label>
          <input
            id="email-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          ></input>
          {/* {isValid ? null : <p>Enter email address.</p>} */}
        </div>
        <div>
          <label>Password:</label>
          <input
          id='password-input'
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          >
          </input>
        </div>
        <button onClick={handleFormSubmit}>Sign up and help out!</button>
      <Link to = '/login'>Or Click here to login</Link>
      </form>
      {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </>
  );
}
