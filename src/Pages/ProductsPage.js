import "../App.scss";
import Data from "../Data/ProductData";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function Productpage() {
  const [data, setData] = useState(Data);
  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");
  const [occasion, setOccasion] = useState("");
  const [type, setType] = useState("");
  const history = useNavigate();

  // Filters Data by string for example getUnqiueListBy(data, "colour") will return an array of all data with colour and removes the duplicates.
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  return (
    <>
      {/* Heading */}
      <header className="productpage-Header">
        <div className="container">
          <h2>BOUQUETS</h2>
          <p>
            Order by 3pm for flower delivery today. All flowers are hand-crafted
            by your local artisan florist and beautifully gift-wrapped in
            eco-friendly packaging.
          </p>
        </div>
      </header>
      {/* SearchBar */}
      <div className="product-search-bar">
        <div className="container">
          <div className="search-bar-wrapper">
            <ul>
              <h5>Size</h5>
              <select
                name="size"
                id="size"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              >
                <option>All</option>
                {getUniqueListBy(data, "size").map((item) => {
                  const { size } = item;
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </ul>
            <ul>
              <h5>Colour</h5>
              <select
                name="colour"
                id="colour"
                onChange={(event) => {
                  setColour(event.target.value);
                }}
              >
                <option>All</option>
                {getUniqueListBy(data, "colour").map((item) => {
                  const { colour } = item;
                  return (
                    <option key={colour} value={colour}>
                      {colour}
                    </option>
                  );
                })}
              </select>
            </ul>
            <ul>
              <h5>Occasion</h5>
              <select
                name="occasion"
                id="occasion"
                onChange={(event) => {
                  setOccasion(event.target.value);
                }}
              >
                <option>All</option>
                {getUniqueListBy(data, "occasion").map((item) => {
                  const { occasion } = item;
                  return (
                    <option key={occasion} value={occasion}>
                      {occasion}
                    </option>
                  );
                })}
              </select>
            </ul>
            <ul>
              <h5>Type</h5>
              <select
                name="type"
                id="type"
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <option>All</option>
                {getUniqueListBy(data, "type").map((item) => {
                  const { type } = item;
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container">
        <div className="product-grid">
          {data
            .filter((val) => {
              if (size == "" || size == "All") {
                return val;
              } else if (val.size.toLowerCase().includes(size.toLowerCase())) {
                return val;
              }
            })
            .filter((val) => {
              if (colour == "" || colour == "All") {
                return val;
              } else if (
                val.colour.toLowerCase().includes(colour.toLowerCase())
              ) {
                return val;
              }
            })
            .filter((val) => {
              if (occasion == "" || occasion == "All") {
                return val;
              } else if (
                val.occasion.toLowerCase().includes(occasion.toLowerCase())
              ) {
                return val;
              }
            })
            .filter((val) => {
              if (type == "" || type == "All") {
                return val;
              } else if (val.type.toLowerCase().includes(type.toLowerCase())) {
                return val;
              }
            })
            .map((product) => {
              const { title, price, img, id } = product;

              return (
                <div className="product" onClick={() => history(`/Shop/${id}`)}>
                  <img src={img} alt={title} />
                  <div className="product-info-wrapper">
                    <h4>{title}</h4>
                    <h2>£{price}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Productpage;
