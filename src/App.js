
import './App.css';
import ShippingComponent from './Components/ShippingComponent/ShippingComponent';
import Header from "./Components/Header"
import ProductPage from "./Pages/ProductsPage/ProductPage"
import SellersDashboard from './Pages/Sellers Dashboard/SellersDashboard';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductPage/>
      <SellersDashboard/>
      <ShippingComponent />
      
    </div>
  );
}

export default App;
