import "./css/Donations.scss";

export default function Donations() {
  return (
    <>
      <h1>What would you like to donate today?</h1>
      <div className="donation-categories">
        <div>
          <h2 className="category-name medical">Medical</h2>
          <label htmlFor="feminine-products">Feminine Products</label>
          <select name="feminine-products">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hand-sanitizer">Hand Sanitizer</label>
          <select name="hand-sanitizer">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="masks">Masks</label>
          <select name="masks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name food">Food</h2>
          <label htmlFor="canned-food">Canned Food</label>
          <select name="canned-food">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="fruit">Fruit</label>
          <select name="fruit">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="meat">Meat</label>
          <select name="meat">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name clothing">Clothing</h2>
          <label htmlFor="socks">Socks</label>
          <select name="socks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="underwear">Underwear</label>
          <select name="underwear">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hats">Hats</label>
          <select name="hats">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </>
  );
}
