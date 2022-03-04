import "../App.scss";
import { useParams } from "react-router-dom";
import Data from "../Data/ProductData";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Product(props) {
  const { onAdd, showPopUp } = props;
  const [mainImg, setMainImg] = useState("");
  const { id } = useParams();

  // Finds Product with the same Id
  const productD = Data.find((x) => {
    if (x.id == id) {
      return x;
    }
  });

  // Star Rating
  let starList = [];

  const addStars = () => {
    for (let i = 0; i < productD.stars; i++) {
      starList.push(<li>{<AiFillStar />}</li>);
    }
    const outlineStars = 5 - productD.stars;
    for (let i = 0; i < outlineStars; i++) {
      starList.push(<li>{<AiOutlineStar />}</li>);
    }
  };

  useEffect(() => {
    setMainImg(productD.img);
  }, []);

  const changeImgHandler = (name) => {
    setMainImg(name);
  };

  addStars();
  return (
    <>
      <div className="container">
        <div className="product-wrapper">
          <div className="left-images">
            <div className="large-img-wrapper">
              <img className="main-prod-img" src={mainImg} alt="" />
            </div>
            <div className="small-img-wrapper">
              <img
                className="small-img"
                src={productD.img}
                onClick={() => changeImgHandler(productD.img)}
                alt=""
              />
              {productD.subImages.map((name) => (
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
            <h2>{productD.title}</h2>
            <h1>£{productD.price}</h1>
            <ul className="stars">
              {starList}({productD.reviews})
            </ul>
            <h5>
              Colour: <span>{productD.colour}</span>
            </h5>
            <h5>
              Size: <span>{productD.size}</span>
            </h5>
            <p>
              Desc: <span>{productD.desc}</span>
            </p>
            <div className="right-info-button-wrapper">
              {console.log(productD)}
              <button
                onClick={function (event) {
                  onAdd(productD);
                  showPopUp(productD);
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
