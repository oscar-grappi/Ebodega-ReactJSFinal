import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import CartList from "./components/Cart/CartList";
import CheckOut from "./components/Checkout/CheckOut";


function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </CartProvider>
  )
}

export default App
