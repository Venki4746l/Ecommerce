import axios from "axios";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_ERROR = "PRODUCT_DETAILS_ERROR";

export const fetchProductDetails = () => {
  return {
    type: PRODUCT_DETAILS_REQUEST,
  };
};

export const fetchProductDetailsSuccess = (data) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};

export const fetchProductDetailsError = (err) => {
  return {
    type: PRODUCT_DETAILS_ERROR,
    payload: err,
  };
};

// This is an action creator
export const getSingleProduct = (id) => {
  return function (dispatch) {
    dispatch(fetchProductDetails());
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      // if the request was successful we get back the response
      .then((response) => {
        const singleProduct = response.data;
        dispatch(fetchProductDetailsSuccess(singleProduct));
      })
      // if the request failed we get back an error
      .catch((error) => {
        dispatch(fetchProductDetailsError(error.message));
      });
  };
};
