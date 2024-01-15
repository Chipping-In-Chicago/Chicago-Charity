import "./css/Donations.scss";
import { useState } from 'react';

export default function Donations() {
const [selectedValue, setSelectedValue] = useState([]);

const handleDropdownChange = (e,index) => {
  e.preventDefault()
  const newSelectedValue = [...selectedValue]
  newSelectedValue[index]= e.target.value;
  setSelectedValue(newSelectedValue)
  // setSelectedValue(e.target.value)
  // console.log(e.target.value)
}

  return (
    <>
      <h1 className="question">What would you like to donate today?</h1>
      <form onSubmit={handleDropdownChange}>
      <div className="donation-categories">
        <div>
          <h2 className="category-name medical">Medical</h2>
          <label htmlFor="feminine-products">Feminine Products</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="feminine-products">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hand-sanitizer">Hand Sanitizer</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="hand-sanitizer">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="masks">Masks</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="masks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name food">Food</h2>
          <label htmlFor="canned-food">Canned Food</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="canned-food">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="fruit">Fruit</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="fruit">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="meat">Meat</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="meat">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <h2 className="category-name clothing">Clothing</h2>
          <label htmlFor="socks">Socks</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="socks">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="underwear">Underwear</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="underwear">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="hats">Hats</label>
          <select value ={selectedValue} onChange={handleDropdownChange} name="hats">
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
