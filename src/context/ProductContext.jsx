import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  product: {
    price: 250.0,
    quantity: 0,
    discount: 50,
  },
  cart: [],
};

const productReducer = ({ product, cart }, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        product: { ...product, quantity: product.quantity++ },
        cart: [...cart],
      };
    case "DECREASE_QUANTITY":
      if (product.quantity == 0) {
        return {
          product: { ...product },
          cart: [...cart],
        };
      } else {
        return {
          product: { ...product, quantity: product.quantity-- },
          cart: [...cart],
        };
      }
    case "ADD_TO_CART":
      return {
        product: {...product},
        cart : [...cart, action.product]
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [{ product, cart }, dispatch] = useReducer(
    productReducer,
    initialState
  );
  const data = { product, cart, dispatch };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export const CustomProductContext = () => useContext(ProductContext);
