import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Forgot from './Pages/Forgotpass/forgot';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path='Forgot' element={<Forgot/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
