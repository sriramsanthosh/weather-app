import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/home";
import WeatherDetails from './components/weatherDetails';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path = "/weather-at/:id" element = { <WeatherDetails /> } />
            <Route exact path = "/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
