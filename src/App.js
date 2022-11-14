
import './App.css';
import ShippingComponent from './Components/ShippingComponent/ShippingComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OrderSummary from './Components/ShippingComponent/OrderSummary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderSummary />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="shipping-details" element={<ShippingComponent />} />
                  {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
