import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/actions/ShopAction";
import "./ProductComponent.css";
import Filter from "../Filter/Filter";
import Search from "../ShopSearch/ShopSearch";
import { SpinnerCircularFixed } from "spinners-react";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";


const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => ({ ...state.Products }));
  console.log(products);

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
            <Filter />
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <Search />
              </div>
              {!loading ? (
                products.map((each, index) => {
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
                            <h6 className="text-truncate mb-3">{each.title}</h6>
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
                            <a href="kd" className="btn btn-sm text-dark p-0">
                              <i className="fas fa-eye mr-1 fas-color"></i>
                              View Detail
                            </a>
                          </Link>
                          <button>
                         
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
