import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../redux/actions/ShopDetailAction";
import Rating from "../Rating/Rating";
import SocialIConShareData from "../../../constants/Products/SocialButtonSinglesectionData";
import AllProducts from "../AllProducts/AllProducts";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

import TabSection from "../TabSection/TabSection";
import { ADD_CART } from "../../../redux/actions/Carditemaction";

const SingleProduct = () => {
  const { loading, product } = useSelector((state) => state.productDetails);
  const [addTocard, setAddTocart] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  //auantiy increase
  const [count, setCount] = useState(1);

  //increase quantiy
  const increaseQuantity = () => {
    setCount((prev) => prev + 1);
  };
  //decrease Quntity
  const decreaseQuantity = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  //add to cart
  const addTocardhandler = (item) => {
    setAddTocart(true);

    dispatch({ type: ADD_CART, payload: { ...item, quantity: count } });
    setTimeout(() => setAddTocart(false), 1500);
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="shop-detail-header-container">
        <h1 className="shop">SHOP DETAIL</h1>
        <div className="shop-detail-navigation">
          <Link to="/" className="links">
            Home
          </Link>
          <p className="pl-2 pr-2">-</p>
          <span> Shop Detail</span>
        </div>
      </div>
      <div className="shop-detail-container">
        {!loading ? (
          <>
            <div className="container-fluid" key={product.id}>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                  <div className="border shop-detail-product-img-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="shop-detail-product-avatar"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7">
                  <h3 className="shop-detail-product-title">{product.title}</h3>
                  <Rating
                    rating={product.rating?.rate}
                    reviews={product.rating?.count}
                  />

                  <h3 className="shop-product-price">${product.price}</h3>

                  <p className="shop-product-description">
                    {product.description}
                  </p>
                  <div className="shop-detail-size-container">
                    <h6 className="shop-detail-size">Sizes: </h6>
                    <div className="shop-detail-size-align-container">
                      <input type="radio" id="xs" className="input-item mr-2" />
                      <label htmlFor="xs" className="mr-3">
                        XS
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="small"
                        className="input-item mr-2"
                      />
                      <label htmlFor="small" className="mr-3">
                        S
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="medium"
                        className="input-item mr-2"
                      />
                      <label htmlFor="medium" className="mr-3">
                        M
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="large"
                        className="input-item mr-2"
                      />
                      <label htmlFor="large" className="mr-3">
                        L
                      </label>
                    </div>
                    <div>
                      <input type="radio" id="xl" className="input-item mr-2" />
                      <label htmlFor="xl" className="mr-3">
                        XL
                      </label>
                    </div>
                  </div>
                  <div className="shop-detail-size-container pt-3">
                    <h6 className="shop-detail-size">Colors: </h6>
                    <div className="shop-detail-size-align-container">
                      <input
                        type="radio"
                        id="black"
                        className="input-item mr-2"
                      />
                      <label htmlFor="black" className="mr-3">
                        Black
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="white"
                        className="input-item mr-2"
                      />
                      <label htmlFor="white" className="mr-3">
                        White
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="red"
                        className="input-item mr-2"
                      />
                      <label htmlFor="red" className="mr-3">
                        Red
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="green"
                        className="input-item mr-2"
                      />
                      <label htmlFor="green" className="mr-3">
                        Green
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="blue"
                        className="input-item mr-2"
                      />
                      <label htmlFor="blue" className="mr-3">
                        Blue
                      </label>
                    </div>
                  </div>
                  <div className="shop-detail-button-cart-container">
                    <div className="shop-detail-cart-button-container">
                      <div>
                        <button
                          onClick={decreaseQuantity}
                          className="shop-detail-cart-button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="cart-button"
                          >
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                          </svg>
                        </button>
                      </div>
                      <div className="value-container">
                        <p className="value ">{count}</p>
                      </div>
                      <div className="">
                        <button
                          onClick={increaseQuantity}
                          className="shop-detail-cart-button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="cart-button"
                          >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => addTocardhandler(product)}
                        className={
                          addTocard ? "addedTocart" : "shop-cart-button"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="cart-icon-button"
                        >
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        {addTocard ? "Item Added " : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                  <div className="shop-detail-social-container">
                    <h6>Share on:</h6>
                    {SocialIConShareData.map((each) => (
                      <a
                        href={each.link}
                        target="_blank"
                        rel="noreferrer"
                        key={each.id}
                      >
                        {each.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="spinner-container">
            <SpinnerCircular size={100} style={{ color: "#fd7e14" }} />
          </div>
        )}
      </div>
      <div className="col-lg-12 tab-section-container">
        <TabSection />
      </div>
      <AllProducts />
    </>
  );
};

export default SingleProduct;
