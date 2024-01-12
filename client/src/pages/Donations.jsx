import "./css/Donations.scss";

export default function Donations() {
  return (
    <>
      <h1>What would you like to donate today?</h1>
      <div className="donation-categories">
        <div>
          <h2 className="category-name medical">Medical</h2>
          <label for="feminine-products">Feminine Products</label>
          <select name="feminine-products">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="hand-sanitizer">Hand Sanitizer</label>
          <select name="hand-sanitizer">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="masks">Masks</label>
          <select name="masks">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name food">Food</h2>
          <label for="canned-food">Canned Food</label>
          <select name="canned-food">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="fruit">Fruit</label>
          <select name="fruit">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="meat">Meat</label>
          <select name="meat">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name clothing">Clothing</h2>
          <label for="socks">Socks</label>
          <select name="socks">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="underwear">Underwear</label>
          <select name="underwear">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="hats">Hats</label>
          <select name="hats">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </>
  );
}
