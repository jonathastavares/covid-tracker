import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { getData } from './redux/data/country';
import Country from './components/country';
import Regions from './components/regions';

const baseURL = 'https://api.covid19tracking.narrativa.com';

function App() {
  const dispatch = useDispatch();
  const today = new Date();
  const year = today.getFullYear();
  const month = () => {
    if ((today.getMonth() + 1) < 10) {
      return `0${(today.getMonth() + 1)}`;
    }
    return (today.getMonth() + 1);
  };
  const day = () => {
    if (today.getDate() < 10) {
      return `0${today.getDate()}`;
    }
    return today.getDate();
  };
  const date = `${year}-${month()}-${day()}`;
  const link = `${baseURL}/api/${date}/country/brazil`;
  useEffect(() => {
    dispatch(getData(link));
  }, []);

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [show]);

  if (!show) return <div>Content loading, please wait!</div>;
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
        <Route path="/" element={<Country />} />
        <Route path="regions" element={<Regions />} />
      </Routes>
    </Router>
  );
}

export default App;
