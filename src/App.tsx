import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="screens-container">
        <Sidebar />
        <div className='other-screens'>Screen</div>
      </div>
    </div>
  );
}

export default App;
