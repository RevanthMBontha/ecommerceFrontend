import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PageLayout from "./layouts/PageLayout";
import {
  About,
  Auth,
  Cart,
  Contact,
  Error,
  Home,
  ProductListing,
  SearchPageListing,
  SingleProduct,
  Checkout,
  Profile,
  UserDetails,
} from "./pages";

import SearchContext from "./contexts/searchContext.js";
import CartContext from "./contexts/cartContext.js";
import Orders from "./pages/Orders.jsx";
import InvoicePDF from "./pages/InvoicePDF.jsx";
import SavedAddresses from "./pages/SavedAddresses.jsx";

// Create a provider component
// eslint-disable-next-line react/prop-types
function CartProvider({ children }) {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [address, setAddress] = useState({});
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        address,
        setAddress,
        deliveryFee,
        setDeliveryFee,
        taxAmount,
        setTaxAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react/prop-types
function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
      <ToastContainer />
    </SearchContext.Provider>
  );
}

function App() {
  const queryClient = new QueryClient();

  const initialOptions = {
    clientId:
      "ARyLwFtB3NTzsQ7dZXdPiJ_Ak6eIuasLM-qwmjEgV1nr89QVhy5m7DMVXnlY_ESmzUuF0NruyXEjXOi1",
    currency: "USD",
    intent: "capture",
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />} error={<Error />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all" element={<ProductListing />} />
        <Route path="/men" element={<ProductListing />}>
          <Route path="rings" element={<ProductListing />} />
          <Route path="bracelets" element={<ProductListing />} />
          <Route path="necklaces" element={<ProductListing />} />
        </Route>
        <Route path="/women" element={<ProductListing />}>
          <Route path="rings" element={<ProductListing />} />
          <Route path="bracelets" element={<ProductListing />} />
          <Route path="necklaces" element={<ProductListing />} />
          <Route path="skincare" element={<ProductListing />} />
        </Route>
        <Route path="/unisex" element={<ProductListing />} />
        <Route path="/search" element={<SearchPageListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/invoice/:id" element={<InvoicePDF />} />
        <Route path="/savedAddresses" element={<SavedAddresses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Route>,
    ),
  );
  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions} deferLoading={false}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <SearchProvider>
              <RouterProvider router={router} />
            </SearchProvider>
          </CartProvider>
        </QueryClientProvider>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
