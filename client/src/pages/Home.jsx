import { useQuery } from "@apollo/client";
import "./css/Home.scss";
import { Link } from 'react-router-dom'
import { QUERY_ITEMS, QUERY_PROFILES } from "../utils/queries";

export default function Home() {
  const { loading, data } = useQuery(QUERY_ITEMS)
  console.log('data:', data)
  console.log('loading:', loading)
  // const itemList = data?.items || [];

  return (
    <>
      <div className="categories">
        <div>
          <h3> Current number of Medical Items donated:</h3>
          <ul className="item-list">
            <li>Feminine Products:</li>
            <li>Hand Sanitizer:</li>
            <li>Masks:</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Food Items donated:</h3>
          <ul className="item-list">
            <li>Canned Food:</li>
            <li>Fruit:</li>
            <li>Meat:</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Clothing Items donated:</h3>
          <ul className="item-list">
            <li>Socks:</li>
            <li>Underwear:</li>
            <li>Hats:</li>
          </ul>
        </div>
        <Link to = '/signup' className="btn">I need to help</Link>
      </div>
    </>
  );
}
