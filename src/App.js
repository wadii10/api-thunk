import './App.css';
import ListCountries from './Components/ListCountries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DetailCountry from './Components/DetailCountry';




function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<ListCountries />} />
          <Route path='/detail/:country_id' element={<DetailCountry />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
