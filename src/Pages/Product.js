import "../App.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Product(props) {
  const { onAdd, showPopUp } = props;
  const [mainImg, setMainImg] = useState();
  const { id } = useParams();
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
  const [starListState, setStarListState] = useState([]);

  // Initial API call to return single product.
  useEffect(() => {
    console.log("First time running");
    const url = `https://flower-api-ecommerce.herokuapp.com/menu?id=${id}`;
    try {
      const fetchMyApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data[0]);
        setLoading(false);
        setMainImg(data[0].img);
        addStars(data[0]);
      };
      fetchMyApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Creates a list of stars relative to the data.
  const addStars = (data) => {
    let starList = [];
    for (let i = 0; i < data.stars; i++) {
      starList.push(<li>{<AiFillStar />}</li>);
    }
    const outlineStars = 5 - data.stars;
    for (let i = 0; i < outlineStars; i++) {
      starList.push(<li>{<AiOutlineStar />}</li>);
    }
    setStarListState(starList);
  };

  const changeImgHandler = (name) => {
    setMainImg(name);
  };

  // addStars();
  return (
    <>
      <div className="container">
        {loading ? (
          <div className="centered-loader">
            <div class="loading"></div>
          </div>
        ) : (
          <div className="product-wrapper">
            <div className="left-images">
              <div className="large-img-wrapper">
                <img className="main-prod-img" src={mainImg} alt="" />
              </div>
              <div className="small-img-wrapper">
                <img
                  className="small-img"
                  src={apiData.img}
                  onClick={() => changeImgHandler(apiData.img)}
                  alt=""
                />
                {apiData.subImages.map((name) => (
                  <img
                    className="small-img"
                    src={name}
                    onClick={() => changeImgHandler(name)}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="right-info">
              <h2>{apiData.title}</h2>
              <h1>£{apiData.price}</h1>
              <ul className="stars">
                {starListState}({apiData.reviews})
              </ul>
              <h5>
                Colour: <span>{apiData.colour}</span>
              </h5>
              <h5>
                Size: <span>{apiData.size}</span>
              </h5>
              <p>
                Desc: <span>{apiData.desc}</span>
              </p>
              <div className="right-info-button-wrapper">
                <button
                  onClick={function (event) {
                    onAdd(apiData);
                    showPopUp(apiData);
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="product-wrapper">
          <div className="left-images">
            <div className="large-img-wrapper">
              <img className="main-prod-img" src={mainImg} alt="" />
            </div>
            <div className="small-img-wrapper">
              <img
                className="small-img"
                src={apiData.img}
                onClick={() => changeImgHandler(apiData.img)}
                alt=""
              />
              {apiData.subImages.map((name) => (
                <img
                  className="small-img"
                  src={name}
                  onClick={() => changeImgHandler(name)}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="right-info">
            <h2>{apiData.title}</h2>
            <h1>£{apiData.price}</h1>
            <ul className="stars">
              {starList}({apiData.reviews})
            </ul>
            <h5>
              Colour: <span>{apiData.colour}</span>
            </h5>
            <h5>
              Size: <span>{apiData.size}</span>
            </h5>
            <p>
              Desc: <span>{apiData.desc}</span>
            </p>
            <div className="right-info-button-wrapper">
              <button
                onClick={function (event) {
                  onAdd(apiData);
                  showPopUp(apiData);
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Product;
