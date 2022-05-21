import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Products from './pages/Products/Products';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Transactions from './pages/Transactions/Transactions';
import AddUser from './pages/Add-User/Add-User';
import AddProduct from './pages/Add-Product/Add-Product';
import Profile from './pages/User-Profile/Profile';
import Product from './pages/Product/Product';
import Users from './pages/Users-Admin/Users';
import Login from './pages/Login/Login';
import { useState } from 'react';
import { useAuth } from './Context/AuthContext';

const App = () => {

  const [logged, setLogged] = useState(false)
  const {user} = useAuth()

  const AppLayout = () => (
    <>
      <Navbar /><div className="screens-container">
      <Sidebar />
      <div className='screens-section-container'>
        <Outlet/>
      </div>
      </div>
    </>
  )

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <AppLayout /> : < Navigate to="/login" /> }>
            <Route path='/' element={<Home />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/add-user' element={<AddUser />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/users' element={<Users />} />
          </Route>
          <Route path="/login" element={user ? < Navigate to="/" /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
