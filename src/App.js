import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import { BRANDS } from './data/car_brand'
import CarBrands from './pages/carbrands/CarBrands';
import CarList from './pages/carlist/CarList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CarBrands />} />
        <Route path='/:name/carlist' element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
