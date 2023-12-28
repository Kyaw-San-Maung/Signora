import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducer";
import productReducer from "./Reducer";

const Cart = createContext();
faker.seed(99)

function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

    const [state, dispatch ] = useReducer(cartReducer, {
        product: products,
        cart: []
    })
  
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFasDelivery: false,
    byRating: 0,
    searchQuery: ""
 })
    
  return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}