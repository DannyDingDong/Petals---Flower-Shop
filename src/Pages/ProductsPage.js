import "../App.scss";
import Data from "../Data/ProductData";
import { useEffect, useState, useRef, componentDidMount } from "react";
import { useNavigate, Link } from "react-router-dom";
function Productpage() {
  const [apiData, setApiData] = useState([]);
  const [sizeVal, setSize] = useState("");
  const [colourVal, setColour] = useState("");
  const [occasionVal, setOccasion] = useState("");
  const [typeVal, setType] = useState("");
  const history = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    size: "",
    colour: "",
    occasion: "",
    type: "",
  });
  const [dropDownData, setDropDownData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiLoaded, setApiLoaded] = useState(false);

  // Sends initial API call for products
  useEffect(() => {
    console.log("is this one running everytime?");
    const url = "https://flower-api-ecommerce.herokuapp.com/menu";
    try {
      const fetchMyApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data);
        setDropDownData(data);
        setApiLoaded(true);
      };

      fetchMyApi();
    } catch (err) {
      console.log(err);
      setApiLoaded(false);
    }
  }, []);

  // Sends api call with filters based on select boxes.
  useEffect(() => {
    console.log(searchFilters);
    let url = "https://flower-api-ecommerce.herokuapp.com/menu?";
    let params = url;
    if (searchFilters.size != "" || undefined) {
      params = url + "size=" + searchFilters.size;
    }
    if (searchFilters.colour != "" || undefined) {
      params = params + "&colour=" + searchFilters.colour;
    }
    if (searchFilters.occasion != "" || undefined) {
      params = params + "&occasion=" + searchFilters.occasion;
    }
    if (searchFilters.type != "" || undefined) {
      params = params + "&type=" + searchFilters.type;
    }

    try {
      const fetchMyApi = async () => {
        const response = await fetch(params);
        const data = await response.json();
        setApiData(data);
        setApiLoaded(true);
      };

      fetchMyApi();
    } catch (err) {
      console.log(err);
      setApiLoaded(false);
    }
  }, [searchFilters]);

  // Filters Data by string for example getUnqiueListBy(data, "colour") will return an array of all data with colour and removes the duplicates.
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  function searchHandler() {
    console.log("this is the search handler" + searchFilters.size);
    setSearchFilters((prevState) => {
      return {
        size: (prevState.size = sizeVal),
        colour: (prevState.colour = colourVal),
        occasion: (prevState.occasion = occasionVal),
        type: (prevState.type = typeVal),
      };
    });
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
                <option value="">All</option>
                {getUniqueListBy(dropDownData, "size").map((item) => {
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
                <option value="">All</option>
                {getUniqueListBy(dropDownData, "colour").map((item) => {
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
                <option value="">All</option>
                {getUniqueListBy(dropDownData, "occasion").map((item) => {
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
                <option value="">All</option>
                {getUniqueListBy(dropDownData, "type").map((item) => {
                  const { type } = item;
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </ul>
            <button className="searchBtn" onClick={() => searchHandler()}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container">
        {apiLoaded ? (
          <div>
            <div className="product-grid">
              {apiData.map((product) => {
                const { title, price, img, id } = product;

                return (
                  <Link
                    to={{ pathname: `/Shop/${id}`, state: { data: apiData } }}
                  >
                    <div className="product">
                      <img src={img} alt={title} />
                      <div className="product-info-wrapper">
                        <h4>{title}</h4>
                        <h2>£{price}</h2>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="centered-loader">
              <p>{apiData.length} items found.</p>
            </div>
          </div>
        ) : (
          <div className="centered-loader">
            <div class="loading"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Productpage;
