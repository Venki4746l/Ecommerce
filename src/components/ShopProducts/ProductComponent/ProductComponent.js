//dinesh,dhanaraju,venkateswara rao
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/actions/ShopAction";
import "./ProductComponent.css";

import { SpinnerCircularFixed } from "spinners-react";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import { ADD_CART } from "../../../redux/actions/Carditemaction";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => ({ ...state.Products }));
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState({
    all: true,
    between0and200: false,
    between201and400: false,
    between401and600: false,
    between601and800: false,
    between801and1000: false,
  });

 

  // const sortOptions = {
  //   az: {
  //     sortMethod: (a, b) =>
  //       a.title > b.title ? 1 : a.title === b.title ? 0 : -1,
  //   },
  //   za: {
  //     sortMethod: (a, b) =>
  //       b.title > a.title ? 1 : a.title === b.title ? 0 : -1,
  //   },
  //   priceLow: {
  //     sortMethod: (a, b) => a.price - b.price,
  //   },
  //   priceHigh: {
  //     sortMethod: (a, b) => b.price - a.price,
  //   },
  //   ratingLow: {
  //     sortMethod: (a, b) => a.rating?.rate - b.rating?.rate,
  //   },
  //   ratingHigh: {
  //     sortMethod: (a, b) => b.rating?.rate - a.rating?.rate,
  //   },
  // };

  const handlePrice = (e) => {
    const { name, checked } = e.target;
    setFilterByPrice((prevState) => {
      if (name === "all") {
        return {
          all: checked,
          between0and200: false,
          between201and400: false,
          between401and600: false,
          between601and800: false,
          between801and1000: false,
        };
      } else {
        return {
          ...prevState,
          [name]: checked,
          all: false,
        };
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    if (filterByPrice.all) {
      return true;
    }
    if (
      filterByPrice.between0and200 &&
      product.price >= 0 &&
      product.price <= 200
    ) {
      return true;
    }
    if (
      filterByPrice.between201and400 &&
      product.price >= 201 &&
      product.price <= 400
    ) {
      return true;
    }
    if (
      filterByPrice.between401and600 &&
      product.price >= 401 &&
      product.price <= 600
    ) {
      return true;
    }
    if (
      filterByPrice.between601and800 &&
      product.price >= 601 &&
      product.price <= 800
    ) {
      return true;
    }
    if (
      filterByPrice.between801and1000 &&
      product.price >= 801 &&
      product.price <= 1000
    ) {
      return true;
    }
    return false;
  });


  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "az") return a.title > b.title ? 1 : a.title === b.title ? 0 : -1;
    else if (sort === "za") return a.title < b.title ? 1 : a.title === b.title ? 0 : -1
    else if (sort === "priceLow") return a.price - b.price;
    else if (sort === "priceHigh") return b.price - a.price;
    else if (sort === "ratingLow") return a.rating?.rate - b.rating?.rate;
    else if (sort === "ratingHigh") return b.rating?.rate - a.rating?.rate;
})
  const result = sortedProducts.filter((each) =>
    each.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //fetching the data
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);



  return (
    <>
      <div>
        <Shop />
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4 filter-heading">
                Filter by price
              </h5>
              <form>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input
                      name="all"
                      checked={filterByPrice.all}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-all"
                    />
                    <label className="pl-2" htmlFor="price-all">
                      All Price
                    </label>
                  </div>
                  <span className="border font-weight-normal badge-span">
                    {products.length}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input
                      name="between0and200"
                      checked={filterByPrice.between0and200}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-1"
                    />
                    <label className="pl-2" htmlFor="price-1">
                      $0 - $200
                    </label>
                  </div>
                  <span className="border font-weight-normal badge-span">
                    {filteredProducts.length}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input
                      name="between201and400"
                      checked={filterByPrice.between201and400}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-2"
                    />
                    <label className="pl-2" htmlFor="price-2">
                      $201 - $400
                    </label>
                  </div>
                  <span className="border font-weight-normal  badge-span">
                    {filteredProducts.length}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input
                      name="between401and600"
                      checked={filterByPrice.between401and600}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-3"
                    />
                    <label className="pl-2" htmlFor="price-3">
                      $401 - $600
                    </label>
                  </div>
                  <span className="border font-weight-normal  badge-span">
                    {filteredProducts.length}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input
                      name="between601and800"
                      checked={filterByPrice.between601and800}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-4"
                    />
                    <label className="pl-2" htmlFor="price-4">
                      $601 - $800
                    </label>
                  </div>
                  <span className="border font-weight-normal  badge-span">
                    {filteredProducts.length}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      name="between801and1000"
                      checked={filterByPrice.between801and1000}
                      onChange={handlePrice}
                      type="checkbox"
                      id="price-5"
                    />
                    <label className="pl-2" htmlFor="price-5">
                      $801 - $1000
                    </label>
                  </div>
                  <span className="border font-weight-normal  badge-span">
                    {filteredProducts.length}
                  </span>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="input-group">
                    <input
                      type="text"
                      style={{ border: "0.2px solid grey" }}
                      placeholder="Search by name"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      value={searchTerm}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-transparent span-color">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>

                  <div className="dropdown d-flex ">
                    <h5>Sort By:</h5>

                    <select
                      defaultValue={"az"}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="az">Alphabetically A-Z</option>
                      <option value="za">Alphabetically Z-A</option>
                      <option value="priceLow">Price Low to High</option>
                      <option value="priceHigh">Price High to Low</option>
                      <option value="ratingLow">Rating Low</option>
                      <option value="ratingHigh">Rating High</option>
                    </select>
                  </div>
                </div>
              </div>

              {!loading ? (
               result
                  .map((each, index) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 pb-1"
                        key={index}
                      >
                        <div className="card border-0 mb-4">
                          <div className="card-header p-0 product-img border bg-transparent overflow-hidden position-relative">
                            <Link to={`/shop/${each.id}`}>
                              <img
                                className="img-fluid w-100 h-100 img-styling"
                                src={each.image}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <Link to={`/shop/${each.id}`}>
                              <h6 className="text-truncate mb-3">
                                {each.title}
                              </h6>
                            </Link>
                            <div className="d-flex justify-content-center">
                              <h6>${each.price}</h6>
                              <h6 className="text-muted ml-2">
                                <del>${each.price}</del>
                              </h6>
                            </div>
                          </div>
                          <div className="card-footer d-flex justify-content-between bg-light border">
                            <Link to={`/shop/${each.id}`}>
                              <button className="button_addtocart text-dark p-0">
                                <i className="fas fa-eye mr-1 fas-color"></i>
                                View Detail
                              </button>
                            </Link>
                            <button
                              onClick={() =>
                                dispatch({ type: ADD_CART, payload: each })
                              }
                              className="button_addtocart"
                            >
                              <i className="fas fa-shopping-cart mr-1 fas-color"></i>
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SpinnerCircularFixed size={100} color={"Red"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductComponent;
