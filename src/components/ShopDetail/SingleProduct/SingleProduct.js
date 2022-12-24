import React, { useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../redux/actions/ShopDetailAction";

import AllProducts from "../AllProducts/AllProducts";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
import TabSection from "../TabSection/TabSection";
import { ADD_CART } from "../../../redux/actions/Carditemaction";

const SingleProduct = () => {
  const { loading, product } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

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
                        <button className="shop-detail-cart-button">
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
                        <p className="value ">1</p>
                      </div>
                      <div className="">
                        <Link to={`/shop/productdetails/${product.id}`}>
                          <button className="shop-detail-cart-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="cart-button"
                            >
                              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          dispatch({ type: ADD_CART, payload: product })
                        }
                        className="shop-cart-button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="cart-icon-button"
                        >
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className="shop-detail-social-container">
                    <h6>Share on:</h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="social-network-icon"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="social-network-icon"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="social-network-icon"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="social-network-icon"
                    >
                      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                    </svg>
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
