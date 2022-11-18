
import './App.css';
import ShippingComponent from './Components/ShippingComponent/ShippingComponent';
import Header from "./Components/Header"
import ProductPage from "./Pages/ProductsPage/ProductPage"
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductPage/>
      <ShippingComponent />
      
    </div>
  );
}

export default App;
