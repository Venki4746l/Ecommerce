// bala
import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "./../../redux/actions/Carditemaction";
import PlaceOrderMessage from "./PlaceOrderMessage";

function Checkout() {
  const items = useSelector((state) => state._cardProduct);
  // console.log(items);
  const [orderIntiate, setIntiateOrder] = useState(false);
  let TotalCart = 0;
  items.Carts.forEach(function (item) {
    TotalCart += item.quantity * item.price;
  });
  //clear the cart after place order
  const dispatch = useDispatch();
  const PlaceOrderHandler = (item) => {
    dispatch({
      type: CLEAR_CART,
      payload: item,
    });
    setIntiateOrder(true);
    setTimeout(() => {
      setIntiateOrder(false);
    }, 10000);
  };
  return (
    <>
      <div className="checkout-first-container text-center d-flex flex-column justify-content-center">
        <div>
          <h2 className="checkout-heading">CHECKOUT</h2>
          <div className="checkout-heading-caption">
            <p>
              <Link className="checkout-heading-link" to="/">
                Home
              </Link>
            </p>
            <p className="dashhh">-</p>
            <p className="chechout-checkout">Checkout</p>
          </div>
        </div>
      </div>
      <div className="checkout-second-container">
        <div className="row rowww">
          <div className="col-lg-8">
            <div className="mb-4">
              <h4 className="font-weight-semi-bold">Billing Address</h4>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="checkout-label">First Name</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">Last Name</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">E-mail</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">Mobile No</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="+123 456 789"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">Address Line 1</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="123 Street"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">Address Line 2</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="123 Street"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">Country</label>
                  <select className="checkout-select">
                    <option value="United States">United States</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">City</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="New York"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">State</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="New York"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label className="checkout-label">ZIP Code</label>
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-billing-card">
              <div className="checkout-billing-card-header ">
                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
              </div>
              <div className="checkout-card-body">
                <h5 className="checkout-item mb-3">Products</h5>
                <div className="card_item_showing">
                  {items.Carts.map((item, key) => (
                    <div key={key} className="d-flex justify-content-between">
                      <p className="checkout-card-productsName">
                        <span className="itemTextOverflow">{item.name}</span>
                        {item.quantity}
                      </p>
                      <p className="checkout-card-products">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <hr className="mt-0 checkout-hr" />
                <div className="d-flex justify-content-between mb-4 pt-3">
                  <h6 className="checkout-items">Subtotal</h6>
                  <h6 className="checkout-items">${TotalCart.toFixed(2)}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="checkout-items">Shipping</h6>
                  <h6 className="checkout-items">Free</h6>
                </div>
              </div>
              <div className="checkout-total-container">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="checkout-total">Total</h5>
                  <h5 className="checkout-total">${TotalCart.toFixed(2)}</h5>
                </div>
              </div>
            </div>
            <div className="checkout-billing-card">
              <div className="checkout-billing-card-header ">
                <h4 className="font-weight-semi-bold m-0">Payment</h4>
              </div>
              <div className="checkout-card-body">
                <div className="form-group">
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="checkout-radio"
                      name="payment"
                      id="paypal"
                    />
                    <label className="checkout-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="checkout-radio"
                      name="payment"
                      id="directcheck"
                    />
                    <label className="checkout-label" htmlFor="directcheck">
                      Direct Check
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <input
                      type="radio"
                      className="checkout-radio"
                      name="payment"
                      id="banktransfer"
                    />
                    <label
                      className="checkout-label mb-0"
                      htmlFor="banktransfer"
                    >
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkout-total-container">
                {items.Carts.length === 0 ? (
                  <button className="checkout-buttonBefore">Place Order</button>
                ) : (
                  <button
                    onClick={() => PlaceOrderHandler(items)}
                    className="checkout-button"
                  >
                    Place Order
                  </button>
                )}
              </div>
            </div>
            {orderIntiate && <PlaceOrderMessage /> }
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
