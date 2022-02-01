import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { getData } from './redux/data/countries';
import Countries from './components/countries';
import Regions from './components/regions';
import Region from './components/region';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Router>
      <nav className="d-flex">
        <div>
          <h1>Covid Tracker</h1>
        </div>
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/"
              className="links"
              activeclassname="active"
            >
              Início
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="regions" element={<Regions />} />
        <Route path="/region" element={<Region />} />
      </Routes>
    </Router>
  );
}

export default App;
