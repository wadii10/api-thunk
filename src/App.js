import './App.css';
import ListCountries from './Components/ListCountries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DetailCountry from './Components/DetailCountry';
import Standings from './Components/Standings';




function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<ListCountries />} />
          <Route path='/detail/:country_id' element={<DetailCountry />} />
          <Route path='/standings/:country_id/:league_id' element={<Standings />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
