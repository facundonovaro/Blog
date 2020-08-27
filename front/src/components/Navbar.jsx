import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  categories,
  inputValue,
  disabled,
  handleChange,
  handleSubmitSearch,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Link to="/home">
          <img
            src="http://www.cantabriatic.com/wp-content/uploads/2015/11/javascript-shield-logo-300x169.png"
            style={{ width: "30%" }}
          />
        </Link>
      </div>
      <div>
        <h1>JOACO G PROGRAMA</h1>
      </div>
      <div>
        <label htmlFor="categories">Categorías</label>
        <select name="cars" id="categories">
          {categories &&
            categories.map((category) => {
              return (
                <option key={category._id} value={category.categoryTitle}>
                  {category.categoryTitle}
                </option>
              );
            })}
        </select>
      </div>
      <div>
        <form onSubmit={handleSubmitSearch}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Quiero buscar..."
            value={inputValue}
          />
          <button type="submit" disabled={disabled}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;