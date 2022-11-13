import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import { Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}>
    <Route path='/SignUp' element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
