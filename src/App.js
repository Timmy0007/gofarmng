import "./App.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Forgot from "./Pages/Forgotpass/forgot";
import Resetpassword from "./Pages/Resetpassword/resetpassword";
import Order from "./Pages/OrderPage/order";

import Shippingdets from "./Pages/Shippingdets/shippingdets";

import ProductView from "./Pages/Sellers Dashboard/ProductView";
import Carousel from "./Components/Carouseldiv";
import SideBar from "./Components/ShippingComponent/SideBar/SideBar";
import Carouseldiv from "./Components/Carouseldiv";
import ProductUpload from "./Components/ProductUpload";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import SellersDashboard from "./Pages/Sellers Dashboard/SellersDashboard";
import Header from "./Components/Header";
import ExploreCategories from "./Components/ExploreCategories/ExploreCategories";
import Footer from "./Components/Footer/Footer";
import NewestArrival from "./Components/NewestArrival/NewsetArrival";
import Section from "./Components/Section/Section";
import SubscribeNewsLetter from "./Components/SubscribeNewsLetter/SubscribeNewsLetter";
import TopSellingProduct from "./Components/TopSellingProduct/TopSellingProduct";
// import Home from './Pages/Homepage'

function App() {
  return (
    <>
      <Carouseldiv />
      <Section />
      <ExploreCategories />
      <TopSellingProduct />
      <NewestArrival />
      <SubscribeNewsLetter />
      <Footer />
      {/* <Header />
      <ProductPage />
      <SellersDashboard /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Forgot" element={<Forgot />} />
          <Route path="Resetpassword" element={<Resetpassword />} />
          <Route path="Order" element={<Order />} />
          <Route path="Shippingdets" element={<Shippingdets />} />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Forgot" element={<Forgot />} />
            <Route path="Resetpassword" element={<Resetpassword />} />
            <Route path="Order" element={<Order />} />
            <Route path="productview" element={<ProductView />} />
            <Route path="carousel" element={<Carouseldiv />} />
            <Route path="sidebar" element={<SideBar />} />
            <Route path="productupload" element={<ProductUpload />} />
            <Route path="productpage" element={<ProductPage />} />
          </Routes>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
