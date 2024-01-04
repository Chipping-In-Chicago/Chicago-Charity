import "./css/Home.scss";

export default function Home() {
  return (
    <>
      <h1>Location 1 Current Item List:</h1>
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
        <button className="btn">I need to help</button>
      </div>
    </>
  );
};
