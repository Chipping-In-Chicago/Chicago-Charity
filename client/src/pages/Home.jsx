import { useQuery } from "@apollo/client";
import "./css/Home.scss";
import { Link } from 'react-router-dom'
import { QUERY_ITEMS, QUERY_PROFILES } from "../utils/queries";

export default function Home() {
  const { loading, data } = useQuery(QUERY_ITEMS)
  console.log('data:', data)
  console.log('loading:', loading)
  const item = data?.getItems || [];
  console.log(item)


  return (
    <>
          {loading ? (
            <div>Loading...</div>
          ) : (
      <div key={item} className="categories">
        <div>
          <h3> Current number of Medical Items donated:</h3>
          <ul className="item-list">
            <li>Feminine Products: {item[0].itemCount}</li>
            <li>Hand Sanitizer: {item[1].itemCount}</li>
            <li>Masks: {item[2].itemCount}</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Food Items donated:</h3>
          <ul className="item-list">
            <li>Canned Food: {item[3].itemCount}</li>
            <li>Fruit: {item[4].itemCount}</li>
            <li>Meat: {item[5].itemCount}</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Clothing Items donated:</h3>
          <ul className="item-list">
            <li>Socks: {item[6].itemCount}</li>
            <li>Underwear: {item[7].itemCount}</li>
            <li>Hats: {item[8].itemCount}</li>
          </ul>
        </div>
        <Link to = '/signup' className="btn">I need to help</Link>
      </div>)}
    </>
  );
}