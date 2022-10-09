import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Lay from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Products from './Components/Products/Products';
import Settings from './Components/Settings/Settings';
import ProductAdd from './Components/Form/Form';
function App() {
  return (
  <div className="App">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lay />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin/>} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products/Add" element={<ProductAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
