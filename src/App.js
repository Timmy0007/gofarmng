import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Forgot from "./Pages/Forgotpass/forgot";
import Resetpassword from "./Pages/Resetpassword/resetpassword";
import Order from "./Pages/OrderPage/order";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import Shippingdets from "./Pages/Shippingdets/shippingdets";
import ProductView from "./Pages/Sellers Dashboard/ProductView";
import SideBar from "./Components/ShippingComponent/SideBar/SideBar";
import Carouseldiv from "./Components/Carouseldiv";
import SellersDashboard from "./Pages/Sellers Dashboard/SellersDashboard";
import ProductUpload from "./Components/ProductUpload";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import { ShopContextProvider } from "./Components/context/context";
import Cart from "./Components/Cart/cart";


function App() {
  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Forgot" element={<Forgot />} />
        <Route path="Resetpassword" element={<Resetpassword />} />
        <Route path="Order" element={<Order />} />
        <Route path="Shippingdets" element={<Shippingdets />} />
        <Route path="productview" element={<ProductView />} />
        <Route path="carousel" element={<Carouseldiv />} />
        <Route path="sidebar" element={<SideBar />} />
        <Route path="Cart" element={<Cart/>} />
        <Route path="SellersDashboard" element={<SellersDashboard/>} />
        <Route path="ProductPage" element={<ProductPage />} />
       <Route path="productupload" element={<ProductUpload />} />

          </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
