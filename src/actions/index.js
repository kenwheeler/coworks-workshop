export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  };
};

export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products: products.items
  };
};

export const requestError = (err) => {
  return {
    type: REQUEST_ERROR,
    err: err
  };
};

export const searchProducts = (query) => {
  const URL = 'http://localhost:1337/api/search/' + query + "&numItems=20";
  return (dispatch) => {
    dispatch(requestProducts());
    fetch(URL)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      dispatch(receiveProducts(json));
    }).catch(function(err) {
      dispatch(requestError(err));
    })
  };
};
