import "./css/About.scss";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p className="text">As our mission, we would like to inform people of the right products to donate based on the current products that have already been donated. This is to represent the positive impact an individual can have on the city of Chicago</p>
      <h2>Contact Us</h2>
      <p className="text">To contact us, email us at chip-in-chicago@gmail.com</p>
      <Link to = '/signup' className="btn">I need to help</Link>
    </>
  );
}
