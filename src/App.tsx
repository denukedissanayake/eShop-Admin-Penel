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
} from "react-router-dom";
import Transactions from './pages/Transactions/Transactions';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="screens-container">
          <Sidebar />
          <div className='screens-section-container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/products' element={<Products/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
            </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
