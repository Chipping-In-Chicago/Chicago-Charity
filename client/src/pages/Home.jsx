import { useQuery } from "@apollo/client";
import "./css/Home.scss";
import { Link } from 'react-router-dom'
import { QUERY_ITEMS } from "../utils/queries";

export default function Home() {
  const { loading, data } = useQuery(QUERY_ITEMS)
  console.log('loading:', loading)
  console.log('data:', data)
  const item = data?.getItems || [];
  console.log(item)
  const femPCount = item[0]?.itemCount
  const handSanCount = item[1]?.itemCount
  const maskCount = item[2]?.itemCount
  const cannedFoodCount = item[3]?.itemCount
  const fruitCount = item[4]?.itemCount
  const meatCount = item[5]?.itemCount
  const socksCount = item[6]?.itemCount
  const underwearCount = item[7]?.itemCount
  const hatsCount = item[8]?.itemCount

  return (
    <>
          {loading ? (
            <div>Loading...</div>
          ) : (
      <div key={item} className="categories">
        <div>
          <h3> Current number of Medical Items donated:</h3>
          <ul className="item-list">
            <li>Feminine Products: {femPCount} </li>
            <li>Hand Sanitizer: {handSanCount}</li>
            <li>Masks: {maskCount}</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Food Items donated:</h3>
          <ul className="item-list">
            <li>Canned Food: {cannedFoodCount}</li>
            <li>Fruit: {fruitCount}</li>
            <li>Meat: {meatCount}</li>
          </ul>
        </div>
        <div>
          <h3> Current number of Clothing Items donated:</h3>
          <ul className="item-list">
            <li>Socks: {socksCount}</li>
            <li>Underwear: {underwearCount}</li>
            <li>Hats: {hatsCount}</li>
          </ul>
        </div>
        <Link to = '/signup' className="btn">I need to help</Link>
      </div>)}
    </>
  );
}
