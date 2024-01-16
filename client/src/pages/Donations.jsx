import "./css/Donations.scss";
import { useState, useEffect } from 'react';

export default function Donations() {

const [selectedValues, setSelectedValues] = useState({
  feminineProducts: '0',
  handSanitizer: '0',
  masks: '0',
  cannedFood: '0',
  fruit: '0',
  meat: '0',
  socks: '0',
  underwear: '0',
  hats: '0'
});


useEffect(() => {
  // Side effect code to handle the selected values
  console.log(selectedValues);
}, [selectedValues]);

const handleDropdownChange = (e, dropdownName) => {
  // const { name, value } = e.target;
  setSelectedValues((prevValues) => ({
    ...prevValues,
    [dropdownName]: e.target.value,
  }));
};




  return (
    <>
      <h1 className="question">What would you like to donate today?</h1>
      <form>
      <div className="donation-categories">
        <div>
          <h2 className="category-name medical">Medical</h2>
          <label htmlFor="feminine-products">Feminine Products</label>
          <select value ={selectedValues.feminineProducts} onChange={e => handleDropdownChange(e, 'feminineProducts')} name="feminineProducts">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hand-sanitizer">Hand Sanitizer</label>
          <select value ={selectedValues.handSanitizer} onChange= {e => handleDropdownChange(e, 'handSanitizer')} name="handSanitizer">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="masks">Masks</label>
          <select value ={selectedValues.masks} onChange= {e => handleDropdownChange(e, 'masks')} name="masks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name food">Food</h2>
          <label htmlFor="canned-food">Canned Food</label>
          <select value ={selectedValues.cannedFood} onChange= {e => handleDropdownChange(e, 'cannedFood')} name="cannedFood">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="fruit">Fruit</label>
          <select value ={selectedValues.fruit} onChange= {e => handleDropdownChange(e, 'fruit')} name="fruit">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="meat">Meat</label>
          <select value ={selectedValues.meat} onChange= {e => handleDropdownChange(e, 'meat')} name="meat">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name clothing">Clothing</h2>
          <label htmlFor="socks">Socks</label>
          <select value ={selectedValues.socks} onChange= {e => handleDropdownChange(e, 'socks')} name="socks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="underwear">Underwear</label>
          <select value ={selectedValues.underwear} onChange= {e => handleDropdownChange(e, 'underwear')} name="underwear">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hats">Hats</label>
          <select value ={selectedValues.hats} onChange= {e => handleDropdownChange(e, 'hats')} name="hats">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <button>Donate</button>
      <button>Home</button>
      </form>
    </>
  );
}
